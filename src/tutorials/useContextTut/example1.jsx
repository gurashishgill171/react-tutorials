/** @format */

import React, { createContext, useState } from "react";
import ChildA from "./childA";

const ThemeProvider = createContext(null);

const USECONTEXT_EG1 = () => {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeProvider.Provider value={{ theme, setTheme }}>
			<ChildA />
		</ThemeProvider.Provider>
	);
};

export default USECONTEXT_EG1;
export { ThemeProvider };
