/** @format */

import React from "react";
import AutoComplete from "./autocomplete";

const AutoCompleteTut = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<h1>AutoComplete / Typeahead</h1>
			<AutoComplete placeholder={"Search here..."} />
		</div>
	);
};

export default AutoCompleteTut;
