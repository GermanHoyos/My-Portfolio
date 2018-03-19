	//initial state object of entire site below(globally accessible)
	let state = {
		switchG: 'On',
		switchIsOn: true,
		opacity: 1,
		bits: [0,0,0,0],
		bitsOff: [0,0,0,0]
	};

	let divSwitch = document.querySelector('div.onOffSwitch');
	let rainDiv = document.querySelector('div.rainDiv');
	let arrow = document.querySelector('div.switchArrow');
	rainDiv.innerHTML = state.bits;
	let bitInterval = setInterval(toggleBits, 500);

	divSwitch.addEventListener('click', flipSwitch); //onOffSwitch
	divSwitch.addEventListener('click', arrowAnimate);
	divSwitch.addEventListener('animationend',clearSwitch);

	function flipSwitch() {
		if (state.switchG == 'On') {
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

	function clearSwitch() {
		divSwitch.style.animation = 'none';
		if (state.switchG === 'On'){
			divSwitch.style.backgroundColor = '#33cc33';
			divSwitch.style.top = '0%';
			divSwitch.innerHTML = 'On';
			rainDiv.style.color = 'green';
			//activate rain
		} else if (state.switchG ===  'Off'){
			divSwitch.style.backgroundColor = '#660000';
			divSwitch.style.top = '60%';
			rainDiv.style.color = 'red';
		}
	};

	function arrowAnimate() {
		if (state.switchIsOn === true)	{
			state.switchIsOn = false;
				console.log('SWITCH ARROW IS OFF MODE');
				arrow.style.animation = 'switchIsOff 1.8s infinite';
		} else {
			state.switchIsOn = true;
				console.log('SWITCH ARROW IS ON MODE');
				arrow.style.animation = 'switchIsOn 1.8s infinite';
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
		console.log("overlap" + overlap);

		if (overlap <= 0) {
			innerNav.classList.add("sticky");
		} else {
			innerNav.classList.remove("sticky");
		}
	}

	let header = document.querySelector('header');
	header.addEventListener('animationend', opacitySet);

	window.onscroll = function() {
	let windowY = window.scrollY;
		console.log(windowY);
		if (windowY >= 1){
			header.style.animation = 'fadeOut 0.5s';
			state.opacity = 1;
		} else {
			header.style.animation = 'fadeIn 0.5s';
			state.opacity = 0;
		}
	}

	function opacitySet() {
		if (state.opacity >= 1){
			state.opacity = 0;
			header.style.opacity = "0";
		} else {
			state.opacity = 1;
			header.style.opacity = "1";
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
