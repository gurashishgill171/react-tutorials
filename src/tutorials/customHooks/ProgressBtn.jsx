/** @format */

import React from "react";
import { useOnlineStatus } from "./useOnlineStatus";

const ProgressBtn = () => {
	const isOnline = useOnlineStatus();
	return (
		<button disabled={!isOnline}>
			{isOnline ? "Save progress" : "Reconnecting..."}
		</button>
	);
};

export default ProgressBtn;
