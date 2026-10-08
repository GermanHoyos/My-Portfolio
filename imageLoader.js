/**
 * Asynchronous Retro Image Loader & Retry Engine
 * 
 * Features:
 * 1. Immediate fast-path: Already cached/loaded images display instantly with zero DOM/placeholder overhead.
 * 2. Suppresses default browser "broken image" icons during slow or interrupted transfers.
 * 3. Option A: Per-card retro arcade placeholder skeleton with pulsing pixel animations for in-flight media.
 * 4. High-tolerance stall detection (30s) prevents premature aborts on large media transfers (up to 12MB).
 * 5. Asynchronous in-memory background retries with backoff and cache-busting.
 */

(function () {
    // Flag the document so CSS knows the JS image manager is active
    document.documentElement.classList.add('js-img-manager');

    // Tuning constants
    const RETRY_INITIAL_DELAY_MS = 1500;
    const RETRY_MAX_DELAY_MS = 6000;
    const STALL_TIMEOUT_MS = 30000; // 30s threshold prevents interrupting heavy 12MB GIF streams

    function setupImageLoader() {
        const images = Array.from(document.querySelectorAll('img'));
        images.forEach(img => initImage(img));
    }

    function initImage(img) {
        // Fast-path: If image is already fully loaded from cache, activate immediately
        if (img.complete && img.naturalWidth > 0) {
            img.classList.add('img-loaded');
            return;
        }

        // Record the original target source
        if (!img.dataset.originalSrc) {
            img.dataset.originalSrc = img.getAttribute('src') || '';
        }

        const originalSrc = img.dataset.originalSrc;
        if (!originalSrc) return;

        // Determine if this is a main showcase project media container
        const isProjectMedia = img.closest('.projImgPosition') || img.closest('.projImgPositionGif');
        let placeholder = null;

        if (isProjectMedia) {
            const container = img.parentElement;
            container.classList.add('retro-media-container');

            placeholder = document.createElement('div');
            placeholder.className = 'retro-placeholder';
            placeholder.innerHTML = `
                <div class="retro-spinner">
                    <span class="pixel-block"></span>
                    <span class="pixel-block"></span>
                    <span class="pixel-block"></span>
                </div>
                <div class="retro-status-msg">LOADING ASSET...</div>
                <div class="retro-retry-msg"></div>
            `;
            container.insertBefore(placeholder, img);
        } else {
            img.classList.add('retro-icon-loading');
        }

        img.classList.add('img-loading');

        let retryCount = 0;
        let isResolved = false;
        let stallTimer = null;

        function markSuccess() {
            if (isResolved) return;
            isResolved = true;
            if (stallTimer) clearTimeout(stallTimer);

            img.classList.remove('img-loading');
            img.classList.remove('retro-icon-loading');
            img.classList.add('img-loaded');

            if (placeholder) {
                placeholder.classList.add('placeholder-done');
                setTimeout(() => {
                    if (placeholder && placeholder.parentNode) {
                        placeholder.parentNode.removeChild(placeholder);
                    }
                }, 350);
            }
        }

        function triggerRetry(reason) {
            if (isResolved) return;
            if (stallTimer) clearTimeout(stallTimer);
            retryCount++;

            console.warn(`[ImageLoader] Retrying "${originalSrc}" (Attempt #${retryCount}) - Reason: ${reason}`);

            if (placeholder) {
                const retryMsg = placeholder.querySelector('.retro-retry-msg');
                if (retryMsg) {
                    retryMsg.textContent = `RECONNECTING (TRY #${retryCount})...`;
                }
            }

            // Exponential backoff capped at RETRY_MAX_DELAY_MS
            const delay = Math.min(
                RETRY_INITIAL_DELAY_MS * Math.pow(1.3, retryCount - 1),
                RETRY_MAX_DELAY_MS
            );

            setTimeout(() => {
                if (!isResolved) {
                    attemptLoad();
                }
            }, delay);
        }

        function attemptLoad() {
            if (isResolved) return;

            // Timeout watcher: if transfer stalls for STALL_TIMEOUT_MS, trigger retry
            stallTimer = setTimeout(() => {
                if (!isResolved && (!img.complete || img.naturalWidth === 0)) {
                    triggerRetry('transfer_stall');
                }
            }, STALL_TIMEOUT_MS);

            // Construct next URL with cache-busting timestamp on retries
            let nextSrc = originalSrc;
            if (retryCount > 0) {
                const separator = originalSrc.includes('?') ? '&' : '?';
                nextSrc = `${originalSrc}${separator}_retry=${Date.now()}`;
            }

            // In-memory test image prevents browser from rendering broken icon in DOM
            const testImg = new Image();
            testImg.onload = () => {
                if (!isResolved && testImg.naturalWidth > 0) {
                    img.src = nextSrc;
                    markSuccess();
                }
            };
            testImg.onerror = () => {
                triggerRetry('load_error');
            };
            testImg.src = nextSrc;
        }

        // Listen on existing DOM image
        img.addEventListener('load', () => {
            if (img.naturalWidth > 0) {
                markSuccess();
            }
        });

        img.addEventListener('error', () => {
            triggerRetry('initial_load_error');
        });

        // Start initial load watcher
        stallTimer = setTimeout(() => {
            if (!isResolved && (!img.complete || img.naturalWidth === 0)) {
                triggerRetry('initial_stall');
            }
        }, STALL_TIMEOUT_MS);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupImageLoader);
    } else {
        setupImageLoader();
    }
})();
