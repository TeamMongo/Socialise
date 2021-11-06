import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../App.js';
import { FaUser, FaPlusCircle, FaTrophy, FaCompass } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const UserNav = () => {
	const Auth = useContext(AuthContext);
	const logout = () => {
		localStorage.removeItem('googleToken');
		Auth.setLoggedIn(false);
		Auth.setUser({});
	};
	return (
		<div className="UserNav">
			<div className="NavContainer">
				<div className="LogoutContainer">
					{/* Hidden using CSS. Delete if not required. */}
					<GoogleLogout
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						buttonText="Logout"
						onLogoutSuccess={logout}
					></GoogleLogout>
				</div>
				<div className="UserInfo">
					{/* Hiiden using CSS. Delete using CSS */}
					<span>{'    '}Logged In Navbar</span>
					<span>
						{'    '}Hi {Auth.user.displayName}
					</span>
				</div>

				<NavLink to="/feed" activeClassName="currentNav" exact>
					<span className="NavItem">
						{'    '}
						<IconContext.Provider value={{ className: 'NavIcons' }}>
							<FaCompass />
						</IconContext.Provider>
						<span className="NavLink">Explore</span>
					</span>
				</NavLink>

				<NavLink to="/newvideo" activeClassName="currentNav" exact>
					<span className="NavItem">
						{'    '}
						<IconContext.Provider value={{ className: 'NavIcons' }}>
							<FaPlusCircle />
						</IconContext.Provider>
						<span className="NavLink">New</span>
					</span>
				</NavLink>

				<NavLink to="/user" activeClassName="currentNav" exact>
					<span className="NavItem">
						{'    '}
						<IconContext.Provider value={{ className: 'NavIcons' }}>
							<FaUser />
						</IconContext.Provider>
						<span className="NavLink">Profile</span>
					</span>
				</NavLink>

				<NavLink to="/reward" activeClassName="currentNav" exact>
					<span className="NavItem">
						{'    '}
						<IconContext.Provider value={{ className: 'NavIcons' }}>
							<FaTrophy />
						</IconContext.Provider>
						<span className="NavLink">Reward</span>
					</span>
				</NavLink>
			</div>
		</div>
	);
};

export default UserNav;
