function startCSSAnimations() {
    const slide = document.getElementById("slide_b");
    if (slide) slide.style.animation = 'opacityOn 1s 1';
}

function initMatrixSimulation() {
    let x = Math.floor(Math.random() * 49) + 1; // initial random block between 1 and 49
    let d = Math.floor(Math.random() * 4);      // direction selector (0: right, 1: left, 2: up, 3: down)
    let y = 0;                                  // initial seed flag
    let i = 0;                                  // direction continuation counter

    setInterval(function () {
        if (y < 1) {
            const startHere = document.querySelector('#centerDiv > div > div:nth-child(' + x + ')');
            if (startHere) {
                function clearKeyFrameA() {
                    startHere.style.animation = "none";
                }
                startHere.addEventListener('animationend', clearKeyFrameA, { once: true });
                startHere.style.animation = "pulse 1s 1";
                y = 1;
            }
            return;
        }

        if (y > 0) {
            if (x < 50) {
                i++;
                if (i > 4) {
                    d = Math.floor(Math.random() * 4);
                    i = 0;
                }

                // Move right
                if ((d === 0 && (x + 1) < 50) && (x + 1 !== 8 && x + 1 !== 15 && x + 1 !== 22 && x + 1 !== 29 && x + 1 !== 36 && x + 1 !== 43)) {
                    x = x + 1;
                }

                // Move left
                if ((d === 1 && (x - 1) > 0) && (x - 1 !== 42 && x - 1 !== 35 && x - 1 !== 28 && x - 1 !== 21 && x - 1 !== 14 && x - 1 !== 7)) {
                    x = x - 1;
                }

                // Move up
                if (d === 2 && (x - 7) > 0) {
                    x = x - 7;
                }

                // Move down
                if (d === 3 && (x + 7) < 50) {
                    x = x + 7;
                }
            }

            const continueHere = document.querySelector('#centerDiv > div > div:nth-child(' + x + ')');
            if (continueHere) {
                function clearKeyFrameB() {
                    continueHere.style.animation = "none";
                }
                continueHere.addEventListener('animationend', clearKeyFrameB, { once: true });
                continueHere.style.animation = "pulse 1s 1";
            }
        }
    }, 60);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMatrixSimulation);
} else {
    initMatrixSimulation();
}