function initBackgroundShader() {
    // 1. Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    
    // Style the canvas to sit fixed, full-screen, behind all elements, and ignore pointer events
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-2';
    canvas.style.pointerEvents = 'none';
    document.body.prepend(canvas);

    // 2. Get WebGL context
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
        console.warn('WebGL not supported, falling back to CSS gradient background.');
        return;
    }

    // Since WebGL initialized successfully, clear the body backgrounds so the canvas shows through
    document.body.style.background = 'transparent';
    document.documentElement.style.background = 'transparent';

    // 3. Shader sources
    const vsSource = `
        attribute vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `;

    const fsSource = `
        precision mediump float;
        uniform vec2 u_resolution;
        uniform float u_time;

        void main(){
            vec2 st = gl_FragCoord.xy / u_resolution.xy;
            float wave = sin(st.y * 10.0 + u_time) * 0.5 + 0.5; 
            float sharpWave = pow(wave, 2.0);

            // Custom palette matches the theme colors
            vec3 bgColor = vec3(0.0588, 0.0588, 0.1059); 
            vec3 lineColor = vec3(0.0499, 0.0499, 0.1479); 

            // Interpolate colors based on wave function
            vec3 finalColor = mix(bgColor, lineColor, sharpWave);

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    // Helper: Compile shader
    function compileShader(source, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertexShader = compileShader(vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    // 4. Create WebGL Program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        return;
    }

    gl.useProgram(program);

    // 5. Create buffer for fullscreen quad
    const vertices = new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // 6. Get uniform locations
    const uResolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');

    // 7. Handle resize
    function resize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            gl.viewport(0, 0, width, height);
        }
    }
    window.addEventListener('resize', resize);
    resize();

    // 8. Render loop
    const startTime = Date.now();

    function render() {
        const currentTime = (Date.now() - startTime) * 0.001; // elapsed seconds

        // Set uniform values
        gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
        gl.uniform1f(uTimeLoc, currentTime);

        // Draw the full screen quad
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        requestAnimationFrame(render);
    }

    render();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackgroundShader);
} else {
    initBackgroundShader();
}
