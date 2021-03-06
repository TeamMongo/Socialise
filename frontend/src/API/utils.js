import axios from 'axios';

axios.defaults.baseURL =
	process.env.REACT_APP_BACKENDIP || 'http://localhost:8000';
axios.defaults.headers.common['Authorization'] =
	localStorage.getItem('googleToken'); //Initially Null, After first login it will be filled in local storage

const postLogin = async ({ tokenId }) => {
	try {
		const response = await axios.post('/login', {
			idToken: tokenId,
		});
		localStorage.setItem('googleToken', 'Bearer ' + response.data.token);
		axios.defaults.headers.common['Authorization'] =
			localStorage.getItem('googleToken'); //Check Here
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};

const getUser = async () => {
	try {
		const response = await axios.get('/user');
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};

const patchUser = async (personalObj) => {
	try {
		const response = await axios.patch('/user', personalObj);
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};
const getVideos = async () => {
	try {
		const response = await axios.get('/video');
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};

const createVideo = async (personalObj) => {
	try {
		const response = await axios.post('/video', personalObj);
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};
const heartVideos = async (personalObj) => {
	try {
		const response = await axios.post('/video/heart', personalObj);
		return response.data;
	} catch (err) {
		console.log(err.response);
		return { hearted: false };
	}
};
const shopVideos = async (personalObj) => {
	try {
		const response = await axios.post('/video/shop', personalObj);
		return response.data;
	} catch (err) {
		console.log(err.response);
		return {};
	}
};
const getUserVideos = async () => {
	try {
		const response = await axios.get('/user/video');
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};
const postProgressPower = async () => {
	try {
		const response = await axios.post('/user/reward');
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};
export {
	postLogin,
	getUser,
	patchUser,
	getVideos,
	createVideo,
	heartVideos,
	shopVideos,
	getUserVideos,
	postProgressPower,
};
