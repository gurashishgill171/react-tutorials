/** @format */

import React, { useState, useEffect, useRef } from "react";
import { People } from "./data";

const ImageCarousel = () => {
	const [active, setActive] = useState(0);
	const [data, setData] = useState(null);
	const interval = useRef(null);

	useEffect(() => {
		start();
		return () => clearInterval(interval);
	}, []);

	function start() {
		interval.current = setInterval(() => {
			setActive((prev) => {
				if (prev == People.length - 1) {
					return 0;
				} else {
					return prev + 1;
				}
			});
		}, 3000);
	}

	function stop() {
		if (interval.current) {
			clearInterval(interval);
		}
	}

	function handleImageChange(id) {
		stop();
		setActive(id);
	}

	useEffect(() => {
		setData(People.find((p) => p.id === active));
	}, [active]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "12px",
			}}
		>
			<div
				style={{ height: "500px", width: "500px", border: "1px solid black" }}
			>
				{data && (
					<img
						src={data.image}
						alt={data.name}
						style={{ height: "100%", width: "100%", objectFit: "cover" }}
					/>
				)}
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "8px",
				}}
			>
				{People.map((people) => {
					return (
						<div key={people.id}>
							<img
								src={people.image}
								alt={people.name}
								style={{
									height: "120px",
									width: "120px",
									objectFit: "cover",
									cursor: "pointer",
								}}
								onClick={() => handleImageChange(people.id)}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageCarousel;
