const express = require('express');
const router = express.Router();
const { User } = require('./user.model');
const { Video } = require('../resources/video/video.model');
const { calculateProgressPower } = require('../utils/reward');
router.patch('/', async (req, res) => {
	try {
		const user = await User.findOneAndUpdate(
			{ _id: req.user._id },
			{ ...req.body, newuser: false },
			{
				new: true,
			}
		).exec();
		res.status(200).json({ user: user });
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ error: e.message });
	}
});
router.get('/', (req, res) => {
	res.status(200).json({ user: req.user });
});

router.post('/reward', async (req, res) => {
	try {
		const user = await User.findOneAndUpdate(
			{
				_id: req.user._id,
			},
			{
				progressPower: calculateProgressPower(
					req.user.totalHeartsReceived,
					req.user.shopIconClicks
				),
			},
			{
				new: true,
			}
		).exec();
		res.status(200).json({ user: user });
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ error: e.message });
	}
});
router.get('/video', async (req, res) => {
	try {
		// find user's videos and sort them as most recent to old
		const videos = await Video.find({ userID: req.user._id })
			.sort({ createdAt: 'desc' })
			.lean()
			.exec();
		return res.status(200).json(videos);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ error: e.message });
	}
});

module.exports = router;
