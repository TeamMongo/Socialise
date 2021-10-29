import React from 'react';
import { Link } from 'react-router-dom';

const GenNav = () => {
	return (
		<div>
			<span>
				LoggedOut NavBar
				{'    '}
				<Link to="/">Home</Link>
			</span>
		</div>
	);
};

export default GenNav;
