import React, { useState } from 'react';
import { heartVideos, shopVideos } from '../../API/utils';
// hearts={hearts}
// videoID={videoID}
// userID={userID}
// orderID={orderID}
// productLink={productLink}
function VideoSidebar({ hearts, videoID, userID, productLink }) {
	const [hearted, setHearted] = useState(false);

	const pressLike = () => {
		heartVideos({ creatoruserID: userID, videoID }).then((res) => {
			setHearted((old) => res.hearted);
		});
	};
	const pressShop = () => {
		shopVideos({ creatoruserID: userID, videoID });
		window.location.replace(productLink);
	};
	return (
		<div className="videoSidebar">
			<div className="videoSidebar__button">
				<p>{hearted ? hearts + 1 : hearts}</p>
			</div>
			{hearted ? (
				<div onClick={pressLike}>unlike</div>
			) : (
				<div onClick={pressLike}>Like</div>
			)}

			{/* //to add shop icon and button */}
			<div className="videoSidebar__button">
				<p onClick={pressShop}>Shop</p>
			</div>
		</div>
	);
}

export default VideoSidebar;
