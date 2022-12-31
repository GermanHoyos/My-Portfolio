// :root {
// --gb1: #0f0f1b;
// --gb2: #565a75;
// --gb3: #c6b7be;
// --gb4: #565a75; 
// }

console.log("objects.js loaded");
//initialize empty array for 2d array
var c2Array = [];
var randomArray = [];
var tempArray = [];

//Chose which sort to use
let quickSort  = false;
let bubbleSort = true;
let mergeSort  = false;



//control status of sorts
let statusSort = 0;

//cells for 2d Array
var gridCell = function (top, left, width, height, color) {
    let r = 15, b = 15, g = 27;
    let glow = false;
    let initialPhase = true;
    let alpha = 0;
    let chosen = 0;
    let id = 0;
    this.top = top;
    this.left = left;
    this.height = height;
    this.width = width;
    this.color = color;
    this.r = r;
    this.b = b;
    this.g = g;
    this.glow = glow;
    this.initialPhase = initialPhase;
    this.alpha = alpha;
    this.chosen = chosen;
    this.id = id;
    this.draw = function () {
        if (this.glow == false && this.initialPhase == true && this.chosen == 0) {
            this.alpha = 0;
            //console.log(0);
        }
        if (this.glow == true && this.chosen == 0) {
            this.alpha = 0.5;
            this.r = Math.floor(Math.random() * 255);
            this.b = Math.floor(Math.random() * 255);
            this.g = Math.floor(Math.random() * 255);
            //console.log(1);
        }
        if (this.glow == true && this.initialPhase == false && this.chosen == 0) {
            this.alpha = 1;
            this.r = 86;
            this.b = 90;
            this.g = 117;
            //console.log(2);
        }
        if (this.glow == true && this.initialPhase == false && this.chosen == 1) {
            this.alpha = 1;
            this.r = 252;
            this.b = 3;
            this.g = 119;
            //console.log("chosen");
        }

        c2.fillStyle = "rgb(" + this.r + "," + this.b + "," + this.g + ")";
        c2.globalAlpha = this.alpha;
        c2.fillRect(this.top, this.left, this.width, this.height);
    }
}

//build series of vertical 1d arrays
//total 465 cells
// [13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13][13]
// [12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12][12]
// [11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11][11]
// [10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10][10]
// [ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9][ 9]
// [ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8][ 8]
// [ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7][ 7]
// [ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6][ 6]
// [ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5][ 5]
// [ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4][ 4]
// [ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3][ 3]
// [ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2][ 2]
// [ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1][ 1]
// [ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0][ 0]
// --gb1: #0_f_0_f_1_b;
// --gb2: #5_6_5_a_7_5;
// --gb3: #c_6_b_7_b_e;
// --gb4: #f_a_f_b_f_6;
function fillArray() {
    

    //465 indexes will be created starting at [0]
    //when a cell is pushed into the array
    //the cell is then drawn by the animate()
    //function.
    // push();
    // animate();
    // drawIf();
    // c2Array[i].draw();
    // setInterval && setTimout changes the color phases (this happens after array is built)
    // ^^happens after array is built because js file comes after
    let x = 0;
    let y = 180;
    for (let i = 0; i < 600; i++) {
        if (i < 15)               {                         c2Array.push(new gridCell(x,      y,10,10,"#565a75"));      y -= 12  }
        if (i > 14  && i <  30)   { if (i == 15)  {y = 180} c2Array.push(new gridCell(x + 12, y,10,10,"#565a75"));      y -= 12; }
        if (i > 29  && i <  45)   { if (i == 30)  {y = 180} c2Array.push(new gridCell(x + 24, y,10,10,"#565a75"));      y -= 12; }
        if (i > 44  && i <  60)   { if (i == 45)  {y = 180} c2Array.push(new gridCell(x + 36, y,10,10,"#565a75"));      y -= 12; }
        if (i > 59  && i <  75)   { if (i == 60)  {y = 180} c2Array.push(new gridCell(x + 48, y,10,10,"#565a75"));      y -= 12; }
        if (i > 74  && i <  90)   { if (i == 75)  {y = 180} c2Array.push(new gridCell(x + 60, y,10,10,"#565a75"));      y -= 12; }
        if (i > 89  && i < 105)   { if (i == 90)  {y = 180} c2Array.push(new gridCell(x + 72, y,10,10,"#565a75"));      y -= 12; }
        if (i > 104 && i < 120)   { if (i == 105) {y = 180} c2Array.push(new gridCell(x + 84, y,10,10,"#565a75"));      y -= 12; }
        if (i > 119 && i < 135)   { if (i == 120) {y = 180} c2Array.push(new gridCell(x + 96, y,10,10,"#565a75"));      y -= 12; }
        if (i > 134 && i < 150)   { if (i == 135) {y = 180} c2Array.push(new gridCell(x + 108,y,10,10,"#565a75"));      y -= 12; }
        if (i > 149 && i < 165)   { if (i == 150) {y = 180} c2Array.push(new gridCell(x + 120,y,10,10,"#565a75"));      y -= 12; }
        if (i > 164 && i < 180)   { if (i == 165) {y = 180} c2Array.push(new gridCell(x + 132,y,10,10,"#565a75"));      y -= 12; }
        if (i > 179 && i < 195)   { if (i == 180) {y = 180} c2Array.push(new gridCell(x + 144,y,10,10,"#565a75"));      y -= 12; }
        if (i > 194 && i < 210)   { if (i == 195) {y = 180} c2Array.push(new gridCell(x + 156,y,10,10,"#565a75"));      y -= 12; }
        if (i > 209 && i < 225)   { if (i == 210) {y = 180} c2Array.push(new gridCell(x + 168,y,10,10,"#565a75"));      y -= 12; }
        if (i > 224 && i < 240)   { if (i == 225) {y = 180} c2Array.push(new gridCell(x + 180,y,10,10,"#565a75"));      y -= 12; }
        if (i > 239 && i < 255)   { if (i == 240) {y = 180} c2Array.push(new gridCell(x + 192,y,10,10,"#565a75"));      y -= 12; }
        if (i > 254 && i < 270)   { if (i == 255) {y = 180} c2Array.push(new gridCell(x + 204,y,10,10,"#565a75"));      y -= 12; }
        if (i > 269 && i < 285)   { if (i == 270) {y = 180} c2Array.push(new gridCell(x + 216,y,10,10,"#565a75"));      y -= 12; }
        if (i > 284 && i < 300)   { if (i == 285) {y = 180} c2Array.push(new gridCell(x + 228,y,10,10,"#565a75"));      y -= 12; }
        if (i > 299 && i < 315)   { if (i == 300) {y = 180} c2Array.push(new gridCell(x + 240,y,10,10,"#565a75"));      y -= 12; }
        if (i > 314 && i < 330)   { if (i == 315) {y = 180} c2Array.push(new gridCell(x + 252,y,10,10,"#565a75"));      y -= 12; }
        if (i > 329 && i < 345)   { if (i == 330) {y = 180} c2Array.push(new gridCell(x + 264,y,10,10,"#565a75"));      y -= 12; }
        if (i > 344 && i < 360)   { if (i == 345) {y = 180} c2Array.push(new gridCell(x + 276,y,10,10,"#565a75"));      y -= 12; }
        if (i > 359 && i < 375)   { if (i == 360) {y = 180} c2Array.push(new gridCell(x + 288,y,10,10,"#565a75"));      y -= 12; }
        if (i > 374 && i < 390)   { if (i == 375) {y = 180} c2Array.push(new gridCell(x + 300,y,10,10,"#565a75"));      y -= 12; }
        if (i > 389 && i < 405)   { if (i == 390) {y = 180} c2Array.push(new gridCell(x + 312,y,10,10,"#565a75"));      y -= 12; }
        if (i > 404 && i < 420)   { if (i == 405) {y = 180} c2Array.push(new gridCell(x + 324,y,10,10,"#565a75"));      y -= 12; }
        if (i > 419 && i < 435)   { if (i == 420) {y = 180} c2Array.push(new gridCell(x + 336,y,10,10,"#565a75"));      y -= 12; }
        if (i > 434 && i < 450)   { if (i == 435) {y = 180} c2Array.push(new gridCell(x + 348,y,10,10,"#565a75"));      y -= 12; }
        if (i > 449 && i < 465)   { if (i == 450) {y = 180} c2Array.push(new gridCell(x + 360,y,10,10,"#565a75"));      y -= 12; }
    }
}

// call and draw
fillArray();

function refreshGridLeft(){
    //[quickSort] [bubbleSort] [mergeSort]
    if ( statusSort == 0) {
        return;
    }
    if ( statusSort == 1) {
        c2Array = [];
        fillArray();
        statusSort = 0;
        if (quickSort) {
            
            quickSort = false;
            bubbleSort = false;
            mergeSort = true;
            setTimeout(calledAgain, 40);
            document.querySelector("#centerDisplay").innerHTML = "Merge Sort";
            return;
        }
    
        if (bubbleSort) {
            console.log("quickSort chosen")
            bubbleSort = false;
            mergeSort = false;
            quickSort = true;
            setTimeout(calledAgain, 40);
            document.querySelector("#centerDisplay").innerHTML = "Quick Sort";
            return;
        }
        if (mergeSort) {
            mergeSort = false;
            quickSort = false;
            bubbleSort = true;
            setTimeout(calledAgain, 40);
            document.querySelector("#centerDisplay").innerHTML = "Bubble Sort";
            return;
        }
    }
}

function refreshGridRight(){
    //[quickSort] [bubbleSort] [mergeSort]
    if ( statusSort == 0) {
        return;
    }
    if ( statusSort == 1) {
        c2Array = [];
        fillArray();
        statusSort = 0;
        if (quickSort) {
            quickSort = false;   
            mergeSort = false;
            bubbleSort = true;
            setTimeout(calledAgain, 40);
            document.querySelector("#centerDisplay").innerHTML = "Bubble Sort";
            return;
        }
    
        if (bubbleSort) {
            bubbleSort = false;
            quickSort = false;
            mergeSort = true;
            setTimeout(calledAgain, 40);
            document.querySelector("#centerDisplay").innerHTML = "Merge Sort";
            return;
        }
        if (mergeSort) {
            mergeSort = false;            
            bubbleSort = false;
            quickSort = true;
            setTimeout(calledAgain, 40);
            document.querySelector("#centerDisplay").innerHTML = "Quick Sort";
            return;
        }
    }
}