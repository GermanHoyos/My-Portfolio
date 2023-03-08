console.log("Script Found");

function startCSSAnimations() {
    document.getElementById("slide_b").style.animation = 'opacityOn 10s 1';
}

//startCSSAnimations();

//**************************************************************************
let x = Math.floor(Math.random() * 50); //initial random block out of (49)
let d = Math.floor(Math.random() * 4); //variable to chose directions
let y = 0; //variable for tracking if initial random block has been calculated
let z = 0; //variable for deciding when to change direction
let i = 0; //variable for counting direction continuation

setInterval(
  function(){
      if (y < 1) {
        const startHere = document.querySelector('#centerDiv > div > div:nth-child('+ x +')');
          startHere.addEventListener('animationend',clearKeyFrameA);
            startHere.style.animation = "pulse 0.2s 1";
              function clearKeyFrameA(){
                startHere.style.animation = "none";
              }
        y = 1; return;
      }

      if (y > 0){

        if (x < 50) {
          i++;
            if (i > 4){
              d = Math.floor(Math.random() * 4);
              i = 0;
            }

              //------------------------------------
              if ((d == 0 && (x + 1) < 50) && (x + 1 != 8 && x + 1 != 15 && x + 1 != 22 && x + 1 != 29 && x + 1 != 36 && x + 1 != 43)) { //direction instructed = right
                  x = x + 1; //right
                  //console.log('x = '+ x + ' right'); // (x + 1) != (8||15||22||29||36||43)
              }

              //------------------------------------
              if ((d == 1 && (x - 1) > 0) && (x - 1 != 42 && x - 1 != 35 && x - 1 != 28 && x - 1 != 21 && x - 1 != 14 && x - 1 != 7)){ //direction instructed = left
                  x = x - 1; //left
                  //console.log('x = '+ x + ' left'); // (x - 1) != (42||35||28||21||14||7)
              }

              //------------------------------------
              if (d == 2 && (x - 7) > 0)  { //direction instructed = up
                x = x - 7; //up
                  //console.log('x = ' + x + ' up');
              }

              //------------------------------------
              if (d == 3 && (x + 7) < 50) { //direction instructed = down
                x = x + 7; //down
                  //console.log('x = ' + x + ' down');
              }
        }

        const continueHere = document.querySelector('#centerDiv > div > div:nth-child('+ x +')');
          continueHere.addEventListener('animationend',clearKeyFrameB);
            continueHere.style.animation = "pulse 0.2s 1";
              function clearKeyFrameB(){
                continueHere.style.animation = "none";
              }
      }
  }, 48
);

