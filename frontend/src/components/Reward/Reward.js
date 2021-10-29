import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../App.js';
import { useHistory } from 'react-router';
/**
 * Features :
 * Show Reward Ladder and Rewards
 * Show Reward tier reached
 * (Optional) Show Reward Progress Power(1x, 1.5x, ...) on basis of hearts, shop clicks and tier reached
 */
const Reward = () => {
	const Auth = useContext(AuthContext);
	let history = useHistory();
	useEffect(() => {
		if (Auth.user.newuser) {
			history.push('/user');
		}
		//If someone comes to this route before '/' Auth.user will be blank So we can getUser() from API/utils.js
		//Run the function that runs on clicking update rewards button
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<h1>Rewards Page</h1>
			<button>Update Reward</button>
		</div>
	);
};

export default Reward;
