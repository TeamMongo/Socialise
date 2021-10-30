import React, { useState } from 'react';
import { patchUser } from '../../API/utils.js';

const NewUserForm = () => {
	const [personalObj, setPersonalObj] = useState({ phone: '+91 789654123' });
	const postPersonalInfo = async (personalObj) => {
		const data = await patchUser(personalObj);
		if (data) window.location.reload();
	};
	const [formdata, setFormdata] = useState({
		displayName: '',
		channelName: '',
		age: 14,
		gender: 'Male',
	});
	const handelClick = () => {
		postPersonalInfo(personalObj);
	};
	const handelSubmit = (e) => {
		e.preventDefault();
		postPersonalInfo(formdata);
	};
	const handleChange = (e) => {
		setFormdata((old) => ({ ...old, [e.target.name]: e.target.value }));
	};
	return (
		<div>
			<h1>New User Form</h1>
			<button onClick={handelClick}>Become Old User</button>
			<div className="formpage">
				<form onSubmit={handelSubmit} className="container">
					<span>Few Extra Details..</span>
					<div>
						<div>
							<label htmlFor="Your Name">Your Name</label>
						</div>
						<input
							type="text"
							name="displayName"
							value={formdata.displayName}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<div>
							<label htmlFor="Channel Name">Channel Name</label>
						</div>
						<input
							type="text"
							name="channelName"
							value={formdata.channelName}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<div>
							<label htmlFor="Age">Age</label>
						</div>
						<input
							type="number"
							min="14"
							name="age"
							value={formdata.age}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<div>
							<label htmlFor="Gender">Gender</label>
						</div>
						<select
							value={formdata.gender}
							name="gender"
							onChange={handleChange}
							required
						>
							<option name="male">Male</option>
							<option name="female">Female</option>
						</select>
					</div>
					<div className="termcondn">
						I agree To the Terms and Conditions.
					</div>
					<button className="submitbtn"> Save</button>
				</form>
			</div>
		</div>
	);
};

export default NewUserForm;
