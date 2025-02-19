/** @format */

import React, { memo } from "react";

const ChildComponent = memo(({ title, handleClick }) => {
	console.log("child component rendered");
	return <button>{title}</button>;
});

export default ChildComponent;
