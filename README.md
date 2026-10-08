# Adrian's Coding Portfolio

A retro arcade-themed, single-page web portfolio built from scratch with pure HTML5, CSS Grid, WebGL shaders, and vanilla JavaScript—completely custom with zero external UI frameworks or templates.

---

## 📁 Repository Architecture

```text
My-Portfolio/
├── index.html                # Semantic DOM structure and 9-project showcase matrix
├── grid.css                  # 10x90 CSS Grid layout coordinate system & gradient fallbacks
├── style.css                 # Core visual theme, project cards, and retro placeholders
├── mobileDesign.css          # Responsive media queries (mobile <600px, ultrawide >2100px)
├── matrix.css                # 7x7 matrix grid styling and glowing pulse keyframe animations
├── backgroundShader.js       # Fullscreen WebGL canvas with procedural GLSL wave shader
├── imageLoader.js            # Async retry engine, stall detection, and skeleton loaders
├── matrixPaths.js            # Live autonomous random-walk simulation on a 49-cell grid
├── script.js                 # Dynamic header resizing and viewport state management
└── [assets]                  # Media, graphics, and vector icons
    ├── *.gif                 # Tech demos (Three.js instanced mesh, Raylib wave, Snake)
    ├── *.png                 # Project captures, profile avatar, and social icons
    └── *.svg                 # Vector badges (JavaScript, C#, Angular, Git, CodePen)
```

---

## 🚀 Key Techniques & Code Highlights

* **Mathematical CSS Grid Architecture**: Built on a strict 10-column (`repeat(10, 1fr)`) by 90-row (`repeat(90, 50px)`) fractional layout. Every card, header, and icon is pinned to explicit row and column coordinates, creating a rock-solid arcade alignment without generic templates.
* **Procedural WebGL / GLSL Background Shader**: [`backgroundShader.js`](backgroundShader.js) injects an in-memory WebGL context with custom vertex and fragment shaders (`sin(st.y * 10.0 + u_time)`) computing real-time sinusoidal wave undulations at 60 FPS, with automatic fallback to CSS gradients if WebGL is unsupported.
* **Autonomous Random-Walk Algorithm**: [`matrixPaths.js`](matrixPaths.js) runs a continuous 60ms directional simulation across a 7×7 (49-node) CSS grid. It computes randomized vectors with boundary collision detection and fires hardware-accelerated `@keyframes pulse` CSS animations per node.
* **Asynchronous Image Recovery Engine**: [`imageLoader.js`](imageLoader.js) tests media downloads in memory using background `Image` probes. If a connection drops or stalls, it automatically retries with exponential backoff and cache-busting timestamps without ever flashing the browser's default "broken image" icon.
* **Retro Arcade Skeleton Placeholders**: High-bandwidth GIFs feature dedicated retro placeholder skeletons with animated pulsing pixel blocks and glowing status indicators (`Press Start 2P` font), eliminating layout shift and providing feedback during cold loads.
* **Zero Dependencies**: Handcrafted entirely in vanilla JavaScript, modern CSS3, WebGL, and semantic HTML5—zero npm build pipelines, React, or bloated CSS frameworks.
