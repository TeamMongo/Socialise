import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App.js';
import { useHistory } from 'react-router';
import { postProgressPower } from '../../API/utils.js';
import { tracks } from './trackArray';
import RewardCard from './RewardCard.js';

const Reward = () => {
	const Auth = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	let history = useHistory();
	const updateProgressPower = async () => {
		setLoading(true);
		const data = await postProgressPower();
		Auth.setUser(data.user);
		setLoading(false);
	};
	useEffect(() => {
		if (Auth.user.newuser) {
			history.push('/user');
		}
		updateProgressPower();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h1>Rewards Page</h1>
					<p>Your Points : {Auth.user.points}</p>
					<p>Your Progress Power : {Auth.user.progressPower}x</p>
					<p>General Rate : 100 per video</p>
					<p>
						Increment In Points After Next Video:{' '}
						{Auth.user.progressPower * 100}
					</p>
					<div>
						<h1>Your Progress</h1>
						{tracks.map(
							({ pointsRequired, description, reached }) => {
								reached =
									Auth.user.points >= pointsRequired
										? true
										: false;
								return (
									<RewardCard
										pointsRequired={pointsRequired}
										description={description}
										reached={reached}
									/>
								);
							}
						)}
					</div>
					<button onClick={updateProgressPower}>Update Reward</button>
				</div>
			)}
		</div>
	);
};

export default Reward;
