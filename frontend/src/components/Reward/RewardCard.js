import React from 'react';
const RewardCard = ({ pointsRequired, description, reached }) => {
	return (
		<div
			style={{
				border: '1px solid black',
				display: 'inline-block',
				padding: '10px',
			}}
		>
			<p>Points Required : {pointsRequired}</p>
			<p>Description : {description}</p>
			{reached ? (
				<div
					style={{
						height: '10px',
						width: '100%',
						backgroundColor: 'green',
					}}
				></div>
			) : (
				<div
					style={{
						height: '10px',
						width: '100%',
						backgroundColor: 'red',
					}}
				></div>
			)}
		</div>
	);
};

export default RewardCard;
