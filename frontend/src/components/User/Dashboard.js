import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { AuthContext } from '../../App.js';
import { FaHeart, FaTrello } from 'react-icons/fa';
import './Dashboard.scss';
import Google from '../../assets/google-logo.png';
/**
 * Show My uploaded videos
 * Show My personal Objects
 */
const Dashboard = ({ user, videos }) => {
	videos = [
		{
			id: 1,
			videoLink: 'https://yewtu.be/embed/3vnDBDlRdIQ',
		},
		{
			id: 1,
			videoLink: 'https://yewtu.be/embed/3vnDBDlRdIQ',
		},
		{
			id: 1,
			videoLink: 'https://yewtu.be/embed/3vnDBDlRdIQ',
		},
		{
			id: 1,
			videoLink: 'https://yewtu.be/embed/3vnDBDlRdIQ',
		},
		{
			id: 1,
			videoLink: 'https://yewtu.be/embed/3vnDBDlRdIQ',
		},
	];
	const Auth = useContext(AuthContext);
	const logout = () => {
		localStorage.removeItem('googleToken');
		Auth.setLoggedIn(false);
		Auth.setUser({});
	};

	return (
		<div className="dashboard">
			<div className="container">
				{/* <h1>User Dashboard</h1> */}
				<div className="hero">
					{/* <h2>My Personal Info</h2> */}
					{/* <p>Email : {user.email}</p> */}
					<img src={user.picture} alt="my-img" />
					<p>@{user.channelName}</p>
					{/* <p>Age : {user.age}</p> */}

					{/* <p>Username : {user.displayName}</p> */}
					{/* <p>Gender : {user.gender}</p> */}
					<div className="heartandclick">
						<p>
							<div>{user.totalHeartsReceived}</div>
							<span>Hearts</span>
						</p>
						<p>
							<div>{user.shopIconClicks}</div>
							<span>Clicks</span>
						</p>
					</div>
				</div>

				<GoogleLogout
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					buttonText="Logout"
					render={(renderProps) => (
						<button
							className="logoutbutton"
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							Logout
						</button>
					)}
					onLogoutSuccess={logout}
				></GoogleLogout>

				<div className="footer">
					<div className="gridhead">
						<div className="fatrello">
							<FaTrello />
						</div>
						<div className="faheart">
							<FaHeart />
						</div>
					</div>
					<div className="videogrid">
						{/* <h2>My Uploaded Video</h2> */}
						{videos.map((video, i) => {
							return (
								<div
									className="gridelement iframe-container"
									key={i}
								>
									<iframe
										allow="css image media script xhr frame"
										title={video.title}
										className="video__player"
										src={`${video.videoLink}?autoplay=0&loop=1&controls=1`}
										frameBorder="0"
										allowFullScreen
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
