/** @format */

import React, { lazy, Suspense, useState } from "react";
// import Details from "./details";

const Details = lazy(() => delayForDemo(import("./details")));

const LazyLoading = () => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<>
			<button onClick={() => setShowDetails(!showDetails)}>
				{showDetails ? "Hide" : "Show"}
			</button>
			{showDetails && (
				<Suspense fallback={<div>Loading...</div>}>
					<Details />
				</Suspense>
			)}
		</>
	);
};

function delayForDemo(promise) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => promise);
}

export default LazyLoading;
