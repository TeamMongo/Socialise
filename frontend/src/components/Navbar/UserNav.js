import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App.js';
const UserNav = () => {
	const Auth = useContext(AuthContext);
	const logout = () => {
		localStorage.removeItem('googleToken');
		Auth.setLoggedIn(false);
		Auth.setUser({});
	};
	return (
		<div>
			<GoogleLogout
				clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
				buttonText="Logout"
				onLogoutSuccess={logout}
			></GoogleLogout>
			<span>{'    '}Logged In Navbar</span>
			<span>
				{'    '}Hi {Auth.user.displayName}
			</span>
			<span>
				{'    '}
				<Link to="/user">User</Link>
			</span>
			<span>
				{'    '}
				<Link to="/feed">Feed</Link>
			</span>
			<span>
				{'    '}
				<Link to="/reward">Reward</Link>
			</span>
			<span>
				{'    '}
				<Link to="/newvideo">New</Link>
			</span>
		</div>
	);
};

export default UserNav;
