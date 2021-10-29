import React from 'react';
import User from './components/User/User';
import Feed from './components/Feed/Feed';
import Reward from './components/Reward/Reward';
import NewVideoForm from './components/NewVideoForm/NewVideoForm';
const protectedRoutes = [
	{
		name: 'user',
		exact: true,
		path: '/user',
		main: (props) => <User {...props} />,
		public: false,
	},
	{
		name: 'feed',
		exact: true,
		path: '/feed',
		main: (props) => <Feed {...props} />,
		public: false,
	},
	{
		name: 'reward',
		exact: true,
		path: '/reward',
		main: (props) => <Reward {...props} />,
		public: false,
	},
	{
		name: 'newvideo',
		exact: true,
		path: '/newvideo',
		main: (props) => <NewVideoForm {...props} />,
		public: false,
	},
];

export default protectedRoutes;
