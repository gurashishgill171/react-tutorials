/** @format */

import React from "react";

const Suggestions = ({ suggestions, query }) => {
	return (
		<div
			style={{
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
				width: "100%",
				maxHeight: "320px",
				overflow: "scroll",
				display: "flex",
				flexDirection: "column",
			}}
		>
			{suggestions.length === 0 && <h4>No results found...</h4>}
			{suggestions.map((suggestion) => {
				return (
					<ul
						key={suggestion.id}
						style={{
							borderBottom: "0.1px solid black",
							padding: "8px",
							cursor: "pointer",
						}}
					>
						<li>{suggestion.name}</li>
					</ul>
				);
			})}
		</div>
	);
};

export default Suggestions;
