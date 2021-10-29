import React, { useContext } from 'react';

import { AuthContext } from '../../App.js';

import UserNav from './UserNav.js';
import GenNav from './GenNav.js';
const Navbar = (props) => {
	const Auth = useContext(AuthContext);
	const Comp = !Auth.isLoggedIn ? <GenNav /> : <UserNav />;
	return Comp;
};

export default Navbar;
