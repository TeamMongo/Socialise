import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App.js';
import { useHistory } from 'react-router';
import { getUser, getVideos } from '../../API/utils.js';
import Video from './Video';
import './Feed.scss';
/**
 * Features :
 * Show users their video random Feed
 * Allow user to heart and unheart a video
 * Allow user to go to shop link from shop button
 * Allow user to scroll videos and snap to fit
 */
const Feed = () => {
	const Auth = useContext(AuthContext);
	let history = useHistory();
	const [videos, setVideos] = useState([]);
	const [played, setPlayed] = useState(0);

	const refreshUser = async () => {
		const data = await getUser();
		Auth.setUser(data.user);
	};
	const fetchvideos = () => {
		let temp = [];
		getVideos().then((res) => {
			for (let i = 0; i < res.length; i++) {
				temp.push({ ...res[i], videoID: res[i]._id });
			}
			setVideos((v) => [...temp]);
		});
	};

	// eslint-disable-next-line no-unused-vars
	const handelscroll = (e) => {
		let maxscreen = e.target.scrollTopMax;
		let windowsize = maxscreen / videos.length;
		let currentscreen = Math.max(e.target.scrollTop - 200, 0);
		if (Math.floor(currentscreen / windowsize !== played))
			setPlayed(Math.floor(currentscreen / windowsize));
	};
	useEffect(() => {
		if (Auth.user.newuser) {
			history.push('/user');
		}
		fetchvideos();
		refreshUser();
		//If someone comes to this route before '/' Auth.user will be blank So we can getUser() from API/utils.js
		// 	// *changed* now fetching user data from refresh user
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// console.log(videos);
	return (
		<div className="Feedpage ">
			<div className="container">
				{videos.map((vid, index) => (
					<Video
						key={vid.videoID}
						ishearted={
							Auth.user.heartedVideos.findIndex(
								(id) => id === vid.videoID
							) !== -1
						}
						playing={played === index}
						{...vid}
					/>
				))}
			</div>
		</div>
	);
};

export default Feed;
