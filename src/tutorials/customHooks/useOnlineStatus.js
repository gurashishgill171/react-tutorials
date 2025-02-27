/** @format */

const { useState, useEffect } = require("react");

// The main use of custom hooks is to reduce duplication of code
// for e.g. we can use this online logic anywhere we want without actually
// duplicating the code

// custom hooks name starts with use (convention)

export function useOnlineStatus() {
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		function handleOnline() {
			setIsOnline(true);
		}
		function handleOffline() {
			setIsOnline(false);
		}
		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);
	return isOnline;
}
