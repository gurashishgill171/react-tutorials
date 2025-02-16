/** @format */

import React, { useRef, useState } from "react";

const USEREF_EG1 = () => {
	// useRef is used for 2 reasons -> DOM manipulation and and Storing a info that is not changed on rendering
	// DOM Manipulation example -> play/pause a video

	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	function handleClick() {
		if (isPlaying) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	}
	return (
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
			<video
				width={"500px"}
				ref={videoRef}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			>
				<source
					src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default USEREF_EG1;
