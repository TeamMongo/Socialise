import React from 'react';
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
	ishearted,
	playing,
	...props
}) {
	return (
		<div className="videomainframe">
			<div className="iframe-container">
				<iframe
					allow="css image media script xhr frame"
					title={title}
					className="video__player"
					src={`${videoLink}?autoplay=${playing}&loop=1&controls=1`}
					frameBorder="0"
					allowFullScreen
				/>
			</div>

			{/* <VideoFooter channel={channelName} title={title} /> */}
			<VideoSidebar
				hearts={hearts}
				videoID={videoID}
				userID={userID}
				orderID={orderID}
				productLink={productLink}
				ishearted={ishearted}
				channelName={channelName}
				title={title}
			/>
		</div>
	);
}
