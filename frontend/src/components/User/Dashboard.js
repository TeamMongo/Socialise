import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { AuthContext } from '../../App.js';

/**
 * Show My uploaded videos
 * Show My personal Objects
 */
const Dashboard = ({ user, videos }) => {
	const Auth = useContext(AuthContext);
	const logout = () => {
		localStorage.removeItem('googleToken');
		Auth.setLoggedIn(false);
		Auth.setUser({});
	};

	return (
		<div>
			<h1>User Dashboard</h1>
			<div>
				<h2>My Personal Info</h2>
				<p>Email : {user.email}</p>
				<img src={user.picture} alt="my-img" />
				<p>Age : {user.age}</p>
				<p>Channel Name : {user.channelName}</p>
				<p>Username : {user.displayName}</p>
				<p>Gender : {user.gender}</p>
				<p>Total Hearts Received : {user.totalHeartsReceived}</p>
				<p>Total Shop Clicks : {user.shopIconClicks}</p>
			</div>

			<GoogleLogout
				clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
				buttonText="Logout"
				onLogoutSuccess={logout}
			></GoogleLogout>

			<div>
				<h2>My Uploaded Video</h2>
				{videos.map((video, i) => {
					return <p key={i}>{video.videoLink}</p>;
				})}
			</div>
		</div>
	);
};

export default Dashboard;
