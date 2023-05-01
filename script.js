console.log("script loaded");

window.addEventListener("resize", nameChange);

// function nameChange(){
//     if (window.innerWidth <= 683) {
//         document.querySelector("body > div > div.header_1").innerHTML = "German Hoyos";
//         document.querySelector("body > div > div.header_1").style.fontSize = "35px";
//         document.querySelector("body > div > div.header_1").style.textAlign = "center";
//         document.querySelector("body > div > div.header_2").style.fontSize = "20px";

//     }
//     if (window.innerWidth > 683) {
//         document.querySelector("body > div > div.header_1").innerHTML = "German Adrian Hoyos";
//         document.querySelector("body > div > div.header_1").style.fontSize = "35px";
//         document.querySelector("body > div > div.header_1").style.textAlign = "center";
//         document.querySelector("body > div > div.header_2").style.fontSize = "20px";
//     }
// }

nameChange();