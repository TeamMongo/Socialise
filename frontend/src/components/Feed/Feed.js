import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../App.js';
import { useHistory } from 'react-router';
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
	useEffect(() => {
		if (Auth.user.newuser) {
			history.push('/user');
		}
		//If someone comes to this route before '/' Auth.user will be blank So we can getUser() from API/utils.js
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<h1>Feed Page</h1>
		</div>
	);
};

export default Feed;
