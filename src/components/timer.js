import React, {useState, useEffect} from 'react';

function Timer() {
	let newTime = new Date();
	let date = newTime.getDate();
	let month = newTime.getMonth();
	let year = newTime.getFullYear();
	let timer = null;
    const firstTimer = `${date}/${month}/${year} ${newTime.getHours()} : ${newTime.getMinutes()} : ${newTime.getSeconds()}`;
	
	const displayTimer = () => {
		let time = new Date();
		let hour = time.getHours();
		let minutes = time.getMinutes();
		let seconds = time.getSeconds();
		let displayTime = `${hour} : ${minutes} : ${seconds}`
		document.getElementById('time-block').innerHTML = `${date}/${month}/${year} ${displayTime}`;
        resumeTimer();
	}
	function resumeTimer() {
        timer = setTimeout(() => {
			displayTimer();
		},1000)
	}
	function stopTimer() {
        clearTimeout(timer);
		return;
	}
    function handleDropdown(e) {
        if (e.target.value === 'white') {
            document.getElementById("main-container").classList.replace('black', 'white');
        }
        else {
            document.getElementById("main-container").classList.replace('white', 'black');
        }
    }

	useEffect(() => {
		resumeTimer();
	},[])

	return (
		<div id="main-container" className={`main-container white`}>
			<div className="dropdown">
				<select onChange={handleDropdown}>
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
