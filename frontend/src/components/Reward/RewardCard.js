import React from 'react';
import Gift from '../../assets/birthday-gift.jpg';
import GiftBW from '../../assets/birthday-gift-bw.jpg';

const RewardCard = ({ pointsRequired, description, brand, reached }) => {
	return (
		<div className="Card">
			{reached ? (
				<p class="title" style={{ color: '#FF3F6C' }}>
					{description}
				</p>
			) : (
				<p class="title">{description}</p>
			)}
			<p class="brand">from {brand}</p>

			<div className="Conditional">
				{reached ? (
					<p></p>
				) : (
					<p>
						Unlocks at <br />
						{pointsRequired} Points
					</p>
				)}
				{reached ? (
					<img src={Gift} alt="Gift" />
				) : (
					<img src={GiftBW} alt="Gift BW" />
				)}
			</div>
		</div>
	);
};

export default RewardCard;
