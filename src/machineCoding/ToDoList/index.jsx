/** @format */

import React, { useState, useEffect } from "react";
import ListItem from "./listItem";

const ToDoList = () => {
	const [items, setItems] = useState([]);
	const [value, setValue] = useState("");
	const [editIndex, setEditIndex] = useState(null);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const addItem = () => {
		if (value !== "") {
			if (editIndex === null) {
				setItems((prev) => [...prev, value]);
				setValue("");
			} else {
				const updatedItems = [...items];
				updatedItems[editIndex] = value;
				setItems(updatedItems);
				setValue("");
				setEditIndex(null);
			}
		}
	};

	const deleteItem = (indexToDelete) => {
		const filteredItems = items.filter((_, index) => index !== indexToDelete);
		setItems(filteredItems);
	};

	const editItem = (indexToUpdate) => {
		const prevValue = items[indexToUpdate];
		setValue(prevValue);
		setEditIndex(indexToUpdate);
	};

	useEffect(() => {
		const savedItems = JSON.parse(localStorage.getItem("items"));
		if (savedItems) setItems(savedItems);
	}, []);

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div style={{ width: "520px" }}>
				<input
					type={"text"}
					placeholder="add item..."
					value={value}
					onChange={handleChange}
					style={{ width: "100%" }}
				/>
				<button onClick={addItem}>{editIndex !== null ? "Edit" : "Add"}</button>
			</div>
			<ul
				style={{
					width: "520px",
					listStyle: "none",
					backgroundColor: "lightgray",
					padding: "6px",
				}}
			>
				{items.length == 0 && <h4>No items...</h4>}
				{items.map((item, index) => (
					<li key={index}>
						<ListItem
							value={item}
							deleteItem={() => deleteItem(index)}
							editItem={() => editItem(index)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
