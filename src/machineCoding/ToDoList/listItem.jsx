/** @format */

import React from "react";

const ListItem = ({ value, deleteItem, editItem }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "6px",
				border: "1px solid black",
			}}
		>
			<h4>{value}</h4>
			<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<button onClick={deleteItem}>Delete</button>
				<button onClick={editItem}>Edit</button>
			</div>
		</div>
	);
};

export default ListItem;
