import React, { useState } from 'react';
import { patchUser } from '../../API/utils.js';

const NewUserForm = () => {
	const [personalObj, setPersonalObj] = useState({ phone: '+91 789654123' });
	const postPersonalInfo = async (personalObj) => {
		const data = await patchUser(personalObj);
		if (data) window.location.reload();
	};
	const handleClick = () => {
		postPersonalInfo(personalObj);
	};
	return (
		<div>
			<h1>New User Form</h1>
			<button onClick={handleClick}>Become Old User</button>
		</div>
	);
};

export default NewUserForm;
