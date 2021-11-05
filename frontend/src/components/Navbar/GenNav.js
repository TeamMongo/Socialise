import React from 'react';
import { Link } from 'react-router-dom';

const GenNav = () => {
	return (
		<div className="LoggedOut-Navbar">
			{/* hidden using css. Better to delete if not needed. To remove css look in Homepage.scss file. */}
			<span>
				LoggedOut NavBar
				{'    '}
				<Link to="/">Home</Link>
			</span>
		</div>
	);
};

export default GenNav;
