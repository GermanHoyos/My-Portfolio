// :root {
//     --gb1: #2d1b00;
//     --gb2: #1e606e;
//     --gb3: #5ab9a8;
//     --gb4: #c4f0c2; 
// }

//sort selections
 let sorted = false;

//maximum amount of elemental calls for manipulation------------
    let max = 465;
    let globalId = -1; // this keeps indexes matched to id's

//input id's into all array elements----------------------------
    for (let i = 0; i < max; i++) {
        globalId++;
        c2Array[i].id = globalId; 
    }

//var for set Interval iterations-------------------------------
let i = 0;
    setInterval(
    function(){
            if (i < max){
                c2Array[i].glow = true;
                setTimeout(stabalizeColor, 1000, i);
                i++;
            } else {
                return;
            }
    }, 15 
    );

    function stabalizeColor(i){
        c2Array[i].glow = true;
        c2Array[i].initialPhase = false;
    }

//timing events for content generation
    setTimeout(generateRandomFills, 1000);
    setTimeout(displayRandomFills, 8000);


    if (quickSort) {
        setTimeout(quickSortFunc,8500);
    }

    if (bubbleSort) {
        setTimeout(bubbleSortFunc,8500);
    }

    if (mergeSort) {
        setTimeout(mergeSortFunc,8500);
    }

//generate random fills------------------------------------------
    function generateRandomFills(){
        //console.log("ran");
        //c2Array[1].chosen = 1;
        buildRandomHeights();
    }

    function buildRandomHeights() {
        randomArray = [];
        for (let i = 0; i < 31; i++) {
            randomArray.push(Math.floor(Math.random() * 14));
            //console.log(c2Array[i].id + " " + randomArray[i]);
        }
    }

//display random fills--------------------------------------------
    function displayRandomFills() {
        // var c2Array = [];
        // var randomArray = [];
        let globalId = 0;

        for (let i = 0; i < 465; i++) {
            c2Array[i].chosen = 0;
        }

        for (let i = 0; i < 465; i++) {
            
            if (i < 15) {
            if (c2Array[i].id < randomArray[0]) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 14  && i <  30) {
                if (c2Array[i].id < randomArray[1] + 15) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 29 && i < 45) {
                if (c2Array[i].id < randomArray[2] + 30) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 44 && i < 60) {
                if (c2Array[i].id < randomArray[3] + 45) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 59 && i < 75) {
                if (c2Array[i].id < randomArray[4] + 60) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 74 && i < 90) {
                if (c2Array[i].id < randomArray[5] + 75) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 89 && i < 105) {
                if (c2Array[i].id < randomArray[6] + 90) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 104 && i < 120) {
                if (c2Array[i].id < randomArray[7] + 105) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 119 && i < 135) {
                if (c2Array[i].id < randomArray[8] + 120) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 134 && i < 150) {
                if (c2Array[i].id < randomArray[9] + 135) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 149 && i < 165) {
                if (c2Array[i].id < randomArray[10] + 150) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 164 && i < 180) {
                if (c2Array[i].id < randomArray[11] + 165) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 179 && i < 195) {
                if (c2Array[i].id < randomArray[12] + 180) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 194 && i < 210) {
                if (c2Array[i].id < randomArray[13] + 195) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 209 && i < 225) {
                if (c2Array[i].id < randomArray[14] + 210) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 224 && i < 240) {
                if (c2Array[i].id < randomArray[15] + 225) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 239 && i < 255) {
                if (c2Array[i].id < randomArray[16] + 240) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 254 && i < 270) {
                if (c2Array[i].id < randomArray[17] + 255) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 269 && i < 285) {
                if (c2Array[i].id < randomArray[18] + 270) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 284 && i < 300) {
                if (c2Array[i].id < randomArray[19] + 285) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 299 && i < 315) {
                if (c2Array[i].id < randomArray[20] + 300) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 314 && i < 330) {
                if (c2Array[i].id < randomArray[21] + 315) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 329 && i < 345) {
                if (c2Array[i].id < randomArray[22] + 330) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 344 && i < 360) {
                if (c2Array[i].id < randomArray[23] + 345) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 359 && i < 375) {
                if (c2Array[i].id < randomArray[24] + 360) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 374 && i < 390) {
                if (c2Array[i].id < randomArray[25] + 375) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 389 && i < 405) {
                if (c2Array[i].id < randomArray[26] + 390) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 404 && i < 420) {
                if (c2Array[i].id < randomArray[27] + 405) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 419 && i < 435) {
                if (c2Array[i].id < randomArray[28] + 420) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 434 && i < 450) {
                if (c2Array[i].id < randomArray[29] + 435) {
                    c2Array[i].chosen = 1;
                }
            }

            if (i > 449 && i < 465) {
                if (c2Array[i].id < randomArray[30] + 450) {
                    c2Array[i].chosen = 1;
                }
            }
        } 
    }

//sorting functions---------------------------------------------------
    let allSorted = 0;
    
    
    //QUICK___________________________________________________________   
    function quickSortFunc() {
        console.log("Quick sort function called");
        //document.querySelector("#centerDisplay").innerHTML = "Quick Sort";
        //for effect
        setTimeout(timedSortQuick, 600);
    }
    function timedSortQuick(){
        //quickSort here

        //temp till function is created
        console.log("Quick sort function complete returned");
        statusSort = 1;

        //check allSorted
        // if (allSorted >= 30) {
        //     console.log("Quick sort function complete returned");
        //     statusSort = 1;
        //     return;
        // }     
        // if (allSorted < 30) {
        //     quickSortFunc();
        // }
    }
    //BUBBLE__________________________________________________________
    function bubbleSortFunc() {
        console.log("Bubble sort function called");
        //document.querySelector("#centerDisplay").innerHTML = "Bubble Sort";
        //for effect
        setTimeout(timedSortBubble, 600);
    }              
    function timedSortBubble() {
        let swap1;
        let swap2;

        //loop through the entire grid and swap [i] > [i + 1]
        for (let i = 0; i < randomArray.length; i++) {
            if (randomArray[i] > randomArray[i + 1] ) {
                swap1 = randomArray[i];
                swap2 = randomArray[i + 1];
                randomArray[i] = swap2;
                randomArray[i + 1] = swap1;
                allSorted = 0;
            }
        }
    
        //add to allSorted if check results in true
        for (let i = 0; i < randomArray.length; i++) {
            if (randomArray[i] <= randomArray[i + 1] ) {
                
                allSorted++;
                //console.log(allSorted);
            }
        }
    
        //recursive recursive call untill allSorted = 30   
        displayRandomFills();

        //check allSorted
        if (allSorted >= 30) {
            console.log("Bubble sort function complete returned");
            statusSort = 1;
            return;
        }     
        if (allSorted < 30) {
            bubbleSortFunc();
        }
    }

    //MERGE__________________________________________________________
    function mergeSortFunc() {
        console.log("Merge sort function called");
        //document.querySelector("#centerDisplay").innerHTML = "Merge Sort";
        //for effect
        setTimeout(timedSortMerge, 600);
    }
    function timedSortMerge(){
        //quickSort here
        console.log("Merge sort function complete");


        //temp till function is created
        console.log("Merge sort function complete returned");
        statusSort = 1;


        //check allSorted
        // if (allSorted >= 30) {
        //     console.log("Quick sort function complete returned");
        //     statusSort = 1;
        //     return;
        // }     
        // if (allSorted < 30) {
        //     mergeSortFunc();
        // }

    }


//Rfresh of all arrays and pertanint variables ___________________________________________
//________________________________________________________________________________________
    function calledAgain(){
        
        globalId = 0;
        allSorted = 0;
        //input id's into all array elements

        for (let i = 0; i < max; i++) {
            globalId++;
            c2Array[i].id = globalId; 
        }

        let i = 0;
        
        setInterval(
        function(){
                if (i < max){
                    c2Array[i].glow = true;
                    setTimeout(stabalizeColor, 1000, i);
                    i++;
                } else {
                    return;
                }
        }, 15 
        );

        function stabalizeColor(i){
            c2Array[i].glow = true;
            c2Array[i].initialPhase = false;
        }

        generateRandomFills();


        if (quickSort) {
            setTimeout(quickSortFunc,8500);
        }
    
        if (bubbleSort) {
            setTimeout(bubbleSortFunc,8500);
        }
    
        if (mergeSort) {
            setTimeout(mergeSortFunc,8500);
        }
    }
//________________________________________________________________________________________
//________________________________________________________________________________________









































































// working sort
//let allSorted = 0;
// function bubbleSortFunc() {
//     //console.log("sort began");
//     //Create swap holders
//     let swap1;
//     let swap2;

//     //Confirm randomArray values matche the displayed values
//     for (let i = 0; i < randomArray.length; i++){
//         //console.log(randomArray[i]); //proven true
//     }

//     //loop through the entire grid and swap [i] > [i + 1]
//     for (let i = 0; i < randomArray.length; i++) {
//         if (randomArray[i] > randomArray[i + 1] ) {
            
//             swap1 = randomArray[i];
//             swap2 = randomArray[i + 1];
//             randomArray[i] = swap2;
//             randomArray[i + 1] = swap1;
//             allSorted = 0;
//         }
//     }

//     //add to allSorted if check results in true
//     for (let i = 0; i < randomArray.length; i++) {
//         if (randomArray[i] <= randomArray[i + 1] ) {
            
//             allSorted++;
//             //console.log(allSorted);
//         }
//     }

//     //recursive recursive call untill allSorted = 30   
//     displayRandomFills();

//     //for effect
//     //setTimeout(displayRandomFills, 1000);

//     //check allSorted
//     if (allSorted >= 30) {
//         console.log("done");
//         return;
//     }     
//     if (allSorted < 30) {
//         bubbleSortFunc();
//     }
// }

