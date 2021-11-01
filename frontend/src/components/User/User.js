import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App.js';
import NewUserForm from './NewUserForm.js';
import Dashboard from './Dashboard.js';
import { getUser, getUserVideos } from '../../API/utils';

const UserProfile = (props) => {
	const Auth = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [myVideos, setMyVideos] = useState([]);
	const refreshUser = async () => {
		const data = await getUser();
		Auth.setUser(data.user);
	};
	const getMyVideos = async () => {
		const data = await getUserVideos();
		setMyVideos([...data]);
	};
	const setUpDashboard = async () => {
		setLoading(true);
		await refreshUser();
		await getMyVideos();
		setLoading(false);
	};
	useEffect(() => {
		setUpDashboard();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : Auth.user.newuser ? (
				<NewUserForm />
			) : (
				<Dashboard user={Auth.user} videos={myVideos} />
			)}
		</>
	);
};
export default UserProfile;
