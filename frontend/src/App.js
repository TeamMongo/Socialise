import React, { useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import protectedRoutes from './protectedRoutes';
import ProtectedRouteHoc from './components/ProtectedRoutesHoc';
export const AuthContext = React.createContext(null);

function App() {
	const [isLoggedIn, setLoggedIn] = useState(
		localStorage.getItem('googleToken') ? true : false
	);
	const [user, setUser] = useState({});
	return (
		<AuthContext.Provider
			value={{ isLoggedIn, setLoggedIn, user, setUser }}
		>
			<div className="App">
				<Router>
					<Navbar />
					<Switch>
						<Route
							key="/"
							path="/"
							exact={true}
							render={(props) => <Homepage {...props} />}
						/>
						{protectedRoutes.map((route) => (
							<ProtectedRouteHoc
								key={route.path}
								isLoggedIn={isLoggedIn}
								path={route.path}
								component={route.main}
								exact={route.exact}
								public={route.public}
							/>
						))}
					</Switch>
				</Router>
			</div>
		</AuthContext.Provider>
	);
}
export default App;
