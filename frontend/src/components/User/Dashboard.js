import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { AuthContext } from '../../App.js';
// import { FaHeart, FaTrello } from 'react-icons/fa';
import './Dashboard.scss';
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
		<div className="dashboard">
			<div className="container">
				<div className="hero">
					<img src={user.picture} alt="my-img" />
					<p>@{user.channelName}</p>
					<div className="heartandclick">
						<p>
							<div>{user.totalHeartsReceived}</div>
							<span>Hearts</span>
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
						<h3>My Videos</h3>
					</div>
					<div className="videogrid">
						{videos.length === 0 ? (
							<div className="novideos">No videos!!!</div>
						) : (
							videos.map((video, i) => {
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
							})
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
