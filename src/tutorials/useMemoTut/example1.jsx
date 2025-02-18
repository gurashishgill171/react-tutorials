/** @format */

import React, { useState } from "react";
import ToDoList from "./todo";

function createTodos() {
	const todos = [];

	for (let i = 0; i < 50; i++) {
		todos.push({
			id: i,
			text: `TODO ${i + 1}`,
			completed: Math.random() > 0.5,
		});
	}
	return todos;
}

const todos = createTodos();

const USEMEMO_EG1 = () => {
	const [tab, setTab] = useState("all");
	const [isDark, setIsDark] = useState(false);
	return (
		<div>
			<button onClick={() => setTab("all")}>All</button>
			<button onClick={() => setTab("active")}>Active</button>
			<button onClick={() => setTab("completed")}>Completed</button>
			<label>
				<input
					type="checkbox"
					checked={isDark}
					onChange={(e) => setIsDark(e.target.checked)}
				/>
				Dark Mode
			</label>
			<br />
			<ToDoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
		</div>
	);
};

export default USEMEMO_EG1;
