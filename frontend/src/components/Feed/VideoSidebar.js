import React, { useState } from 'react';
import { heartVideos, shopVideos } from '../../API/utils';
import { FaHeart, FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function VideoSidebar({
	hearts,
	videoID,
	userID,
	productLink,
	ishearted,
	channelName,
	title,
}) {
	const [hearted, setHearted] = useState(ishearted);
	const [totalhearts, setTotalhearts] = useState(hearts);

	const pressLike = async () => {
		const res = await heartVideos({ creatoruserID: userID, videoID });
		setHearted((old) => res.hearted);
		if (res.hearted) {
			setTotalhearts((old) => old + 1);
		} else {
			setTotalhearts((old) => old - 1);
		}
	};
	const pressShop = async () => {
		await shopVideos({ creatoruserID: userID, videoID });
		// window.location.replace(productLink);
	};
	return (
		<div className="videoSidebar">
			<div className="videoSidebarButton">
				{hearted ? (
					<div onClick={pressLike}>
						<IconContext.Provider value={{ className: 'RedHeart' }}>
							<FaHeart />
						</IconContext.Provider>
					</div>
				) : (
					<div onClick={pressLike}>
						<FaRegHeart />
					</div>
				)}
				<p>{totalhearts}</p>
			</div>

			<div className="videoInfo">
				<p>{title}</p>
				<p>@{channelName}</p>
			</div>

			<div className="videoSidebarButton">
				<div onClick={pressShop}>
					<FaShoppingBag />
				</div>
				<p>Shop</p>
			</div>
		</div>
	);
}

export default VideoSidebar;
