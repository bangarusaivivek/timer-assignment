import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  let str = new Date().toString();
	let time = new Date();
	let date = time.getDate();
	let month = time.getMonth();
	let year = time.getFullYear();
	let timer;
	
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
		<div className="main-container">
			<div id="time-block" className="time-block">
				{str}
			</div>
			<button onClick={stopTimer}>stop</button>
			<button onClick={resumeTimer}>resume</button>
		</div>
	);
}

export default App;
