window.onscroll = function() {
		myFunction();
	};
	
	let innerNav = document.getElementById('innerNav');
		
	function myFunction() {
		let windowHeight = window.innerHeight;
		let overlap = (1400 - windowHeight) - window.pageYOffset;
	
		if (overlap <= 0) {
				innerNav.classList.add("sticky");
		} else {
				innerNav.classList.remove("sticky");
		}
	}


//______________________________________________________________________________
//EVERYTHING BELOW THIS LINE IS EXPERIMENTAL CODE, UNTESTED OR DESIGNED TO TEST.
/*
		testOne = one.offsetTop;
		console.log(' page offset = ' + window.pageYOffset);
		console.log(' windowHeight = ' + windowHeight);
		console.log(' test ' + testOne);
		console.log(' overlap ' + overlap);
*/
//FUNCTION - lockElement re-factored
function locElement(element) {
	
	const element = document.getElementById(element); //HTML element passed as argument
	
	let windowHeight = window.innerHeight;
	let elHeight = element.style.height;
	let overlap = (elHeight - windowHeight) - window.pageYOffset;
	
	if (overlap <= 0) {
			one.classList.add("sticky")
		} else {
			one.classList.remove("sticky");
		}
} 