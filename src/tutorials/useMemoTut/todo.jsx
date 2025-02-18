/** @format */

import React, { useMemo } from "react";

function filterToDos(todos, tab) {
	return todos.filter((todo) => {
		if (tab === "all") {
			return true;
		} else if (tab === "active") {
			return !todo.completed;
		} else if (tab === "completed") {
			return todo.completed;
		}
	});
}

const ToDoList = ({ todos, theme, tab }) => {
	let startTime = performance.now();
	while (performance.now() - startTime < 500) {
		// Do nothing for 500 ms to emulate extremely slow code
	}
	const visibleTodos = useMemo(() => filterToDos(todos, tab), [todos, tab]);
	return (
		<div className={theme}>
			<ul>
				{visibleTodos.map((item) => (
					<li key={item.id}>
						{item.completed ? <s>{item.text}</s> : item.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
