import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App.js';
import { useHistory } from 'react-router';
import { postProgressPower } from '../../API/utils.js';
import { tracks } from './trackArray';
import RewardCard from './RewardCard.js';
import './Reward.scss';

const Reward = () => {
	const Auth = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [currLevel, setCurrLevel] = useState(0);
	const [width, setWidth] = useState(0);
	let history = useHistory();

	const updateLevel = () => {
		let i = 0;
		while (tracks[i].pointsRequired <= Auth.user.points) {
			i++;
		}
		// console.log(i);
		setCurrLevel(i);
		let percent;
		if (i == 0) {
			percent = Auth.user.points / tracks[i].pointsRequired;
		} else {
			percent =
				(Auth.user.points - tracks[i - 1].pointsRequired) /
				(tracks[i].pointsRequired - tracks[i - 1].pointsRequired);
		}
		setWidth(percent * 100);
		// console.log(percent);
	};

	const updateProgressPower = async () => {
		setLoading(true);
		const data = await postProgressPower();
		Auth.setUser(data.user);
		// console.log(Auth.user.points);
		// updateLevel();
		setLoading(false);
	};

	useEffect(() => {
		if (Auth.user.newuser) {
			history.push('/user');
		}
		updateProgressPower();
		// console.log(Auth.user.points);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		updateLevel();
	}, [Auth.user]);

	return (
		<div>
			{loading ? (
				<div className="load-container">
					<div className="load">
						<hr />
						<hr />
						<hr />
						<hr />
					</div>
				</div>
			) : (
				<div className="RewardPage">
					<div className="container">
						<div className="UserInfo">
							<img src={Auth.user.picture} alt="Profile Pic" />
							<p>@{Auth.user.channelName}</p>

							<h3>LEVEL {currLevel}</h3>
						</div>
						{/* <p>Your Points : {Auth.user.points}</p>
						<p>Your Progress Power : {Auth.user.progressPower}x</p>
						<p>General Rate : 100 per video</p>
						<p>
							Increment In Points After Next Video:{' '}
							{Auth.user.progressPower * 100}
						</p> */}

						<div className="Progress">
							<div className="backBar">
								<div
									className="frontBar"
									style={{ width: `${width}%` }}
								>
									{currLevel}
								</div>
								<span className="nextLevel">
									{currLevel + 1}
								</span>
							</div>

							<span className="ProgressText">
								{tracks[currLevel].pointsRequired -
									Auth.user.points}{' '}
								POINTS TO NEXT REWARD
							</span>
						</div>

						<div className="Rewards">
							<h3>My Rewards</h3>

							<div className="RewardContainer">
								{tracks.map(
									({
										pointsRequired,
										description,
										brand,
										reached,
									}) => {
										reached =
											Auth.user.points >= pointsRequired
												? true
												: false;
										return (
											<RewardCard
												pointsRequired={pointsRequired}
												description={description}
												brand={brand}
												reached={reached}
											/>
										);
									}
								)}
							</div>
						</div>
						<button
							onClick={updateProgressPower}
							className="UpdateReward"
						>
							Update Reward
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Reward;
