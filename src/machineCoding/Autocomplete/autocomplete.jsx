/** @format */

import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

const AutoComplete = ({ placeholder }) => {
	const [inputValue, setInputValue] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const getSuggestions = async (query) => {
		setLoading(true);
		try {
			const response = await fetch(
				`https://dummyjson.com/recipes/search?q=${query}`
			);
			const result = await response.json();
			setSuggestions(result.recipes);
		} catch (error) {
			setSuggestions([]);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// Implemented debouncing here...
		const getData = setTimeout(() => {
			getSuggestions(inputValue);
		}, 1000);

		return () => clearInterval(getData);
	}, [inputValue]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "8px",
			}}
		>
			<input
				placeholder={placeholder}
				type="text"
				onChange={handleChange}
				style={{ width: "320px", height: "32px" }}
			/>
			{loading ? (
				<h1>Loading Results...</h1>
			) : (
				<Suggestions suggestions={suggestions} query={inputValue} />
			)}
		</div>
	);
};

export default AutoComplete;
