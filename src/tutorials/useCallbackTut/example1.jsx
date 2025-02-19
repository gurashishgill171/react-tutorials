/** @format */

import React, { useState, useCallback } from "react";
import ChildComponent from "./child";

const USECALLBACK_EG1 = () => {
	const [count, setCount] = useState(0);

	const handleClick = useCallback(() => {
		setCount(count + 1);
	}, [count]);
	return (
		<div>
			<h1>Count: {count}</h1>
			<br />
			<button onClick={handleClick}>Increment</button>
			<br />
			<ChildComponent title="Click me" handleClick={handleClick} />
		</div>
	);
};

export default USECALLBACK_EG1;
