import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App.js';
import { useHistory } from 'react-router';
import { getVideos } from '../../API/utils.js';
/**
 * Features :
 * Show users their video Feed on basis of following and random
 * Allow user to heart and unheart a video
 * Allow user to go to shop link from shop button
 * Allow user to scroll videos and snap to fit
 * Show follow button for unfollowed creators
 */
const Feed = () => {
	const Auth = useContext(AuthContext);
	let history = useHistory();
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		if (Auth.user.newuser) {
			history.push('/user');
		}
		let temp = [];
		let res = getVideos();
		for (let i = 0; i < res.length; i++) {
			temp.push(res[i]);
		}
		setVideos((v) => [...temp]);
		//If someone comes to this route before '/' Auth.user will be blank So we can getUser() from API/utils.js
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <div>{videos}</div>;
};

export default Feed;
