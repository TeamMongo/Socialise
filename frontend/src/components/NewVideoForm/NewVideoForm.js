import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../App.js';
import { useHistory } from 'react-router';
const NewVideoForm = () => {
	const Auth = useContext(AuthContext);
	let history = useHistory();
	useEffect(() => {
		if (Auth.user.newuser) {
			history.push('/user');
		}
		//If someone comes to this route before '/' Auth.user will be blank So we can getUser() from API/utils.js
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const uploadVideo = () => {
		console.log('mock upload');
		//Create post request in /API/utils.js
	};
	return (
		<div>
			<h1>Please Create a new video</h1>
			<button onClick={uploadVideo}>Upload</button>
		</div>
	);
};

export default NewVideoForm;
