/** @format */

import React from "react";
import { useOnlineStatus } from "./useOnlineStatus";

const Status = () => {
	const isOnline = useOnlineStatus();
	return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
};

export default Status;
