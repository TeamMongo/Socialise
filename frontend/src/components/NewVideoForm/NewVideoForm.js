import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../App.js';
import { useHistory } from 'react-router';
import { createVideo } from '../../API/utils.js';
const NewVideoForm = () => {
	const Auth = useContext(AuthContext);
	let history = useHistory();
	const [formdata, setFormdata] = useState({
		title: '',
		videoLink: '',
		productLink: '',
		orderID: '',
	});
	useEffect(() => {
		if (Auth.user.newuser) {
			history.push('/user');
		}
		//If someone comes to this route before '/' Auth.user will be blank So we can getUser() from API/utils.js
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const uploadVideo = (formdata) => {
		createVideo({ ...formdata });

		//To change if a new error shower is made
		history.push('/feed');
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		uploadVideo(formdata);
	};
	const handleChange = (e) => {
		setFormdata((old) => ({ ...old, [e.target.name]: e.target.value }));
	};
	return (
		<div>
			<h1>Please Create a new video</h1>
			<button onClick={uploadVideo}>Upload</button>
			<div className="formpage">
				<form onSubmit={handelSubmit} className="container">
					<span>Create A new Video..</span>
					<div>
						<div>
							<label htmlFor="Title">Title</label>
						</div>
						<input
							type="text"
							name="title"
							value={formdata.title}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<div>
							<label htmlFor="Video Link">Video Link</label>
						</div>
						<input
							type="text"
							name="videoLink"
							value={formdata.videoLink}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<div>
							<label htmlFor="product Link">Product Link</label>
						</div>
						<input
							type="text"
							name="productLink"
							value={formdata.productLink}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<div>
							<label htmlFor="Order ID">OrderID</label>
						</div>
						<input
							type="text"
							name="orderID"
							value={formdata.orderID}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="termcondn">
						* I agree To the Terms and Conditions.
					</div>
					<button className="submitbtn"> Upload</button>
				</form>
			</div>
		</div>
	);
};

export default NewVideoForm;
