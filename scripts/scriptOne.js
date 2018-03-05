	//initial state object of entire site below(globally accessible)
	let state = {
		switchG: 'On',
		bits: [0,0,0,0],
		bitsOff: [0,0,0,0]
	};

	let divSwitch = document.querySelector('div.onOffSwitch');
	let rainDiv = document.querySelector('div.rainDiv');
	let bitInterval = setInterval(toggleBits, 500);

	divSwitch.addEventListener('click', flipSwitch);
	divSwitch.addEventListener('animationend',clearSwitch);

	function awake() {
		console.log(state.switchG)
		rainDiv.innerHTML = state.bits;
		/*alert('This site is currently under construction.');*/
	};

	function flipSwitch() {
		if (state.switchG == 'On'){
			state.switchG = 'Off';
			divSwitch.innerHTML = 'Off';
			console.log(state.switchG);
			divSwitch.style.animation = 'off 1s 1';
		} else {
			state.switchG = 'On';
			divSwitch.innerHTML = 'On';
			console.log(state.switchG);
			divSwitch.style.animation = 'on 1s 1';
		}
	};

	function clearSwitch(){

		divSwitch.style.animation = 'none';

		if (state.switchG === 'On'){
			divSwitch.style.backgroundColor = '#33cc33';
			divSwitch.style.left = '0%';
			divSwitch.innerHTML = 'On';
			rainDiv.style.color = 'green';
			//activate rain
		} else if (state.switchG ===  'Off'){
			divSwitch.style.backgroundColor = 'red';
			divSwitch.style.left = '23%';
			rainDiv.style.color = 'red';
		}

	};

	function toggleBits(){

		let x = Math.floor((Math.random() * 2) + 0);
		let y = Math.floor((Math.random() * 2) + 0);
		let z = Math.floor((Math.random() * 2) + 0);
		let i = Math.floor((Math.random() * 2) + 0);

		state.bits[0] = x;
		state.bits[1] = y;
		state.bits[2] = z;
		state.bits[3] = i;

		if (state.switchG === 'On'){
			rainDiv.innerHTML = state.bits;
		} else if (state.switchG ==='Off') {
			rainDiv.innerHTML = state.bitsOff;
		}
	}

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
