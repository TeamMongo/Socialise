import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
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
		const response = await axios.patch(
			'http://localhost:8000/user',
			personalObj
		);
		return response.data;
	} catch (err) {
		console.log(err.response);
	}
};
export { postLogin, getUser, patchUser };
