function normalise(value) {
	return value / 100;
}
//Convert to binary search to find equal to or less than key in arr
function search(arr, key) {
	let foundIndex = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > key) {
			break;
		}
		foundIndex++;
	}
	return foundIndex;
}
function calculateProgressPower(totalHearts, totalShops) {
	const influencerPoints = normalise(totalShops * 2 + totalHearts);
	// Not Normal : <100, 100, 1000, 5000, 10000, 20000, 50000, 75000, 100000
	const influencerTracks = [0, 1, 10, 50, 100, 200, 500, 750, 1000];
	const progressPowerTrack = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
	const trackReached = search(influencerTracks, influencerPoints);
	return progressPowerTrack[trackReached];
}

function updateRewards(currentPoints, totalHearts, totalShops) {
	console.log(totalHearts, totalShops);
	const progressPower = calculateProgressPower(totalHearts, totalShops);
	const generalRate = 100;
	currentPoints += progressPower * generalRate;
	return currentPoints;
}

module.exports = {
	calculateProgressPower: calculateProgressPower,
	updateRewards: updateRewards,
};
