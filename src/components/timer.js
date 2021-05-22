import React, {useState, useEffect} from 'react';
import TimerText from './timerText';

function Timer() {
    const [timerStr, setTimerStr] = useState('');
    const [cssClass, setCssClass] = useState('white');
	let [timer, setTimer] = useState(null);

	let newTime = new Date();
	let date = newTime.getDate();
	let month = newTime.getMonth();
	let year = newTime.getFullYear();

    // calls while component mounted.
    useEffect(() => {
		resumeTimer();
	},[])

    useEffect(() => {
        if (cssClass === 'white') {
            setCssClass('black')
        }
        else {
            setCssClass('white')
        }
    }, [timerStr])
	
    // setting time value
	const displayTimer = () => {
		let time = new Date();
		let hour = time.getHours();
		let minutes = time.getMinutes();
		let seconds = time.getSeconds();
		let displayTime = `${hour} : ${minutes} : ${seconds}`
		setTimerStr(`${date}/${month}/${year} ${displayTime}`);
	}

    // to resume the time
	function resumeTimer() {
        setTimer(setInterval(() => {
			displayTimer();
		},1000))
	}

    // to stop the time
	function stopTimer() {
        clearInterval(timer);
		return;
	}

	return (
		<div id="main-container" className={`main-container ${cssClass}`}>
			{/* <div className="dropdown">
				<select onChange={(e) => setCssClass(e.target.value)}>
					<option value="white">Light</option>
					<option value="black">Dark</option>
				</select>
			</div> */}
			<TimerText props={timerStr}/>
			<button onClick={stopTimer}>stop</button>
			<button onClick={resumeTimer}>resume</button>
		</div>
	);
}

export default Timer;
