import React, { useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { postLogin, getUser } from '../../API/utils.js';
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../../App.js';
import './Homepage.scss';
/**
 * Features :
 * Allow User to Login
 * Give User Info about app
 */
const Homepage = (props) => {
	let history = useHistory();
	const Auth = useContext(AuthContext);
	const loginUser = async (res) => {
		const data = await postLogin(res);
		Auth.setLoggedIn(true);
		Auth.setUser(data.user);
		if (data.user.newuser) history.push('/user');
		else history.push('/feed');
	};
	const redirect2Feed = async () => {
		const data = await getUser();
		Auth.setUser(data.user);
		history.push('/feed');
	};
	useEffect(() => {
		//Can add a loading state for this redirection
		//Make it false inside redirect2Feed()
		if (Auth.isLoggedIn) {
			redirect2Feed();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="Homepage">
			<div className="container">
				<h1>SOCIALISE</h1>
				<GoogleLogin
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					buttonText="Login"
					onSuccess={loginUser}
					onFailure={console.log}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		</div>
	);
};

export default withRouter(Homepage);
