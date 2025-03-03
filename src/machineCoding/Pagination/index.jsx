/** @format */

import React, { useEffect, useState } from "react";
import { TableData } from "./data";

const PaginationTut = () => {
	const PAGE_SIZE = 10;
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const fetchData = async () => {
		const data = await fetch("https://dummyjson.com/products?limit=500");
		const result = await data.json();
		setProducts(result.products);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const start = currentPage * PAGE_SIZE;
	const end = PAGE_SIZE + start;
	const noOfPages = Math.ceil(products.length / PAGE_SIZE);

	console.log(start, end);

	return products.length === 0 ? (
		<h1>No Products found...</h1>
	) : (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<table>
				<thead>
					<th>Title</th>
					<th>Category</th>
					<th>Price</th>
					<th>Image</th>
				</thead>
				<tbody>
					{products.slice(start, end).map((p) => (
						<tr key={p.id}>
							<td>
								<p>{p.title}</p>
							</td>
							<td>
								<p>{p.category}</p>
							</td>
							<td>
								<p>{p.price}</p>
							</td>
							<td>
								<img
									src={p.images[0]}
									alt={p.title}
									style={{
										height: "120px",
										width: "120px",
										objectFit: "cover",
									}}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
				{[...Array(noOfPages).keys()].map((n) => {
					return (
						<span
							style={{
								padding: "8px",
								border: "0.5px solid black",
								margin: "4px",
								cursor: "pointer",
								backgroundColor: currentPage === n ? "yellow" : "transparent",
							}}
							key={n}
							onClick={() => handlePageChange(n)}
						>
							{n}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default PaginationTut;
