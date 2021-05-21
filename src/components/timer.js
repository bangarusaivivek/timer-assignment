import React, {useState, useEffect} from 'react';

function Timer() {
    const [background, setBackground] = useState('light');
	let newTime = new Date();
	let date = newTime.getDate();
	let month = newTime.getMonth();
	let year = newTime.getFullYear();
	let timer;
    const firstTimer = `${date}/${month}/${year} ${newTime.getHours()} : ${newTime.getMinutes()} : ${newTime.getSeconds()}`;
    // const firstTimer = new Date().toString();
	
	const displayTimer = () => {
		let time = new Date();
		let hour = time.getHours();
		let minutes = time.getMinutes();
		let seconds = time.getSeconds();
		let displayTime = `${hour} : ${minutes} : ${seconds}`
		document.getElementById('time-block').innerHTML = `${date}/${month}/${year} ${displayTime}`;
		// console.log(str)
	}
	function timerFunc() {
		displayTimer();
		timer = setTimeout(() => {
			timerFunc();
		},1000)
	}
	const resumeTimer = () => {
		timerFunc();
	}
	const stopTimer = () => {
		clearTimeout(timer);
		return;
	}
	useEffect(() => {
		resumeTimer();
	},[])

	return (
		<div className={`main-container ${background}`}>
			<div className="dropdown">
				<select onChange={(e) => setBackground(e.target.value)}>
					<option value="white">Light</option>
					<option value="black">Dark</option>
				</select>
			</div>
			<div id="time-block" className="time-block">
				{firstTimer}
			</div>
			<button onClick={stopTimer}>stop</button>
			<button onClick={resumeTimer}>resume</button>
		</div>
	);
}

export default Timer;
