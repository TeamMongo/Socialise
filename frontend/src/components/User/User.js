import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App.js';
import NewUserForm from './NewUserForm.js';
import Dashboard from './Dashboard.js';
import { getUser } from '../../API/utils';
/**
 * Features :
 * Allow New User to Post PersonalInfoObj from NewUserForm
 * Allow User to Upload new video from Dashboard
 * Show Other Users for following
 * Allow Users to follow others
 * Show User who they are following. Discuss ??
 * Allow User to Unfollow Others
 * (Optional) Show User Their Uploaded Video List
 * (Optional) Show User Their Followers
 * (Optional) Show Users total Hearts Received
 * (Optional) Show Users total Clicks on Shop icon from their video
 */
const UserProfile = (props) => {
	const Auth = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const refreshUser = async () => {
		setLoading(true);
		const data = await getUser();
		Auth.setUser(data.user);
		setLoading(false);
	};
	useEffect(() => {
		refreshUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : Auth.user.newuser ? (
				<NewUserForm />
			) : (
				<Dashboard />
			)}
		</>
	);
};
export default UserProfile;
