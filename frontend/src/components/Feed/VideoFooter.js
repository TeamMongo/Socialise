import React from 'react';
// import "./VideoFooter.css";
// import MusicNoteIcon from "@material-ui/icons/MusicNote";
// import Ticker from "react-ticker";

function VideoFooter({ channelName, title }) {
	return (
		<div className="videoFooter">
			<div className="videoFooter__text">
				<h3>@{channelName}</h3>
				<p>{title}</p>
			</div>
			<img
				className="videoFooter__record"
				src="https://static.thenounproject.com/png/934821-200.png"
				alt=""
			/>
		</div>
	);
}

export default VideoFooter;
