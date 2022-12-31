// :root {
//     --gb1: #2d1b00;
//     --gb2: #1e606e;
//     --gb3: #5ab9a8;
//     --gb4: #c4f0c2; 
// }

function drawIf() {
    for (let i = 0; i < c2Array.length; i++) {
        c2Array[i].draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
    c2.clearRect(0, 0, innerWidth, innerHeight);
    drawIf();
}

animate();