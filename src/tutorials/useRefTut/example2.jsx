/** @format */

import React, { useRef, useState } from "react";

const USEREF_EG2 = () => {
	// useRef is used for 2 reasons -> DOM manipulation and Storing a info that is not changed on rendering
	// Value Persisting example -> Stopwatch

	const [time, setTime] = useState(0);
	const timerRef = useRef(null);

	function startTimer() {
		// need to store this so as we can clear the interval anytime
		timerRef.current = setInterval(() => {
			setTime((time) => time + 1);
		}, 1000);
	}

	function stopTimer() {
		clearInterval(timerRef.current);
		timerRef.current = null;
	}

	function resetTimer() {
		stopTimer();
		setTime(0);
	}
	return (
		<div>
			<h1>Stopwatch {time} seconds</h1>
			<div>
				<button onClick={startTimer}>Start</button>
				<button onClick={stopTimer}>Stop</button>
				<button onClick={resetTimer}>Reset</button>
			</div>
		</div>
	);
};

export default USEREF_EG2;
