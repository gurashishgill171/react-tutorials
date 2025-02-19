/** @format */

import React, { useContext } from "react";
import { ThemeProvider } from "./example1";

const ChildC = () => {
	const { theme, setTheme } = useContext(ThemeProvider);

	function handleClick() {
		setTheme(theme === "light" ? "dark" : "light");
	}
	return (
		<div>
			{theme}
			<button onClick={handleClick}>Change Theme</button>
		</div>
	);
};

export default ChildC;
