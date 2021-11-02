import React, { useState, useRef } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
export default function Video({
	title,
	videoID,
	videoLink,
	productLink,
	orderID,
	userID,
	channelName,
	hearts,
}) {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);

	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
	};
	return (
		<div className="video">
			<iframe
				title={title}
				className="video__player"
				width="560"
				height="315"
				src={videoLink}
				frameborder="0"
				allowfullscreen
			/>
			{/* <video
				className="video__player"
				loop
				onClick={onVideoPress}
				ref={videoRef}
				src={videoLink}
			/> */}
			<VideoFooter channel={channelName} title={title} />
			<VideoSidebar
				hearts={hearts}
				videoID={videoID}
				userID={userID}
				orderID={orderID}
				productLink={productLink}
			/>
		</div>
	);
}
