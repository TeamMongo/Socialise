import React, { useState } from 'react';
import { heartVideos, shopVideos } from '../../API/utils';

function VideoSidebar({ hearts, videoID, userID, productLink, ishearted }) {
	const [hearted, setHearted] = useState(ishearted);
	const [totalheates, setTotalheates] = useState(hearts);

	const pressLike = async () => {
		const res = await heartVideos({ creatoruserID: userID, videoID });
		setHearted((old) => res.hearted);
		if (res.hearted) {
			setTotalheates((old) => old + 1);
		} else {
			setTotalheates((old) => old - 1);
		}
	};
	const pressShop = async () => {
		await shopVideos({ creatoruserID: userID, videoID });
		// window.location.replace(productLink);
	};
	return (
		<div className="videoSidebar">
			<div className="videoSidebar__button">
				<p>{totalheates}</p>
			</div>
			{hearted ? (
				<div onClick={pressLike}>unlike</div>
			) : (
				<div onClick={pressLike}>Like</div>
			)}
			<div className="videoSidebar__button">
				<p onClick={pressShop}>Shop</p>
			</div>
		</div>
	);
}

export default VideoSidebar;
