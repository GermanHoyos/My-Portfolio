	//initial state object of entire site below(globally accessible)
	let state = {
		switchG: 'On',
		switchIsOn: true,
		opacityH: 1,
		opacityF: 1,
		bits: [0,0,0,0],
		bitsOff: [0,0,0,0]
	};

	let divSwitch = document.querySelector('div.onOffSwitch');
	let rainDiv = document.querySelector('div.rainDiv');
	let arrow = document.querySelector('div.switchArrow');
	let bitInterval = setInterval(toggleBits, 500);
	let innerNav = document.getElementById('innerNav');
	let header = document.querySelector('header');
	let footer = document.querySelector('footer');

	header.addEventListener('animationend', opacitySetH);
	footer.addEventListener('animationend', opacitySetF);
	rainDiv.innerHTML = state.bits;
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

	function myFunction() {
		let windowHeight = window.innerHeight;
		let overlap = (1180 - windowHeight) - window.pageYOffset;
		let windowY = window.scrollY;
		console.log(windowY);
		console.log("overlap" + overlap);
		if (overlap <= 0) {
			innerNav.classList.add("sticky");
		} else {
			innerNav.classList.remove("sticky");
		}
		if (windowY >= 1){
				header.style.animation = 'fadeOut 0.5s';
				footer.style.animation = 'fadeOut 0.5s';
				state.opacityH = 1;
				state.opacityF = 1;
		} else {
				header.style.animation = 'fadeIn 0.5s';
				footer.style.animation = 'fadeIn 0.5s';
				state.opacityH = 0;
				state.opacityF = 0;
		}
	}

	function opacitySetH() {
		if (state.opacityH >= 1){
			state.opacityH = 0;
			header.style.opacity = "0";
			header.style.zIndex = "0";
		} else {
			state.opacityH = 1;
			header.style.opacity = "1";
			header.style.zIndex= "2";

		}
	}

	function opacitySetF() {
		if (state.opacityF >= 1){
			state.opacityF = 0;
			footer.style.opacity = "0";
			footer.style.zIndex = "0";
		} else {
			state.opacityF = 1;
			footer.style.opacity = "1";
			footer.style.zIndex= "2";
		}
	}
