const express = require('express');
const router = express.Router();
const { User } = require('./user.model');

router.patch('/', async (req, res) => {
	const user = await User.findOneAndUpdate(
		{ _id: req.user._id },
		{ ...req.body, newuser: false },
		{
			new: true,
		}
	).exec();
	res.status(200).json({ user: user });
});
router.get('/', (req, res) => {
	res.status(200).json({ user: req.user });
});

module.exports = router;
