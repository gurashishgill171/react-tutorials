/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

const REDUX_EG1 = () => {
	const dispatch = useDispatch();
	// const count = useSelector((state) => state.counter.value);
	const count = 0;

	function handleIncClick() {
		dispatch(increment());
	}
	function handleDecClick() {
		dispatch(decrement());
	}
	return (
		<div>
			<button onClick={handleIncClick}>Inc +</button>
			<br />
			<br />
			<h1>Count: {count}</h1>
			<br />
			<br />
			<button onClick={handleDecClick}>Dec -</button>
		</div>
	);
};

export default REDUX_EG1;
