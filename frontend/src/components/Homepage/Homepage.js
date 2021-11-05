import React, { useEffect, useContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { postLogin, getUser } from '../../API/utils.js';
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../../App.js';
import Logo from '../../assets/myntra-logo.png';
import Google from '../../assets/google-logo.png';
import './Homepage.scss';
//Disable login button if LoggedIn True
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
				<div className="Brand">
					<div className="Brand-Logo">
						<img src={Logo} alt="Myntra" />
					</div>
					<p className="socialise">SOCIALISE</p>
				</div>

				<div className="Login">
					<p className="line1">
						<strong>Login</strong> or <strong>SignUp</strong>
					</p>
					<p className="line2">to continue</p>
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						render={(renderProps) => (
							<button
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								<img src={Google} alt="Google" />
								Sign In
							</button>
						)}
						buttonText="Login"
						onSuccess={loginUser}
						onFailure={console.log}
						cookiePolicy={'single_host_origin'}
					/>
				</div>
				<div className="About">
					<a href="#">Know More</a>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Homepage);
