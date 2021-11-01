const { User } = require('../../user/user.model');
const { Video } = require('./video.model');
const { updateRewards, calculateProgressPower } = require('../../utils/reward');
exports.getAll = async (req, res) => {
	try {
		// find non-user's videos and sort them as most recent to old
		const videos = await Video.find({ userID: { $ne: req.user._id } })
			.sort({ createdAt: 'desc' })
			.lean()
			.exec();
		return res.status(200).json(videos);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ error: e.message });
	}
};
exports.createOne = async (req, res) => {
	try {
		const video = await Video.create({
			...req.body,
			userID: req.user._id,
			channelName: req.user.channelName,
			hearts: 0,
		});
		//Updating User Rewards after new video uploaded
		const creator = await User.findOneAndUpdate(
			{
				_id: req.user._id,
			},
			{
				points: updateRewards(
					req.user.points,
					req.user.totalHeartsReceived,
					req.user.shopIconClicks
				),
				progressPower: calculateProgressPower(
					req.user.totalHeartsReceived,
					req.user.shopIconClicks
				),
			},
			{
				new: true,
			}
		).exec();
		return res.status(200).json(video);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ error: e.message });
	}
};

exports.heartOne = async (req, res) => {
	const videoID = req.body.videoID;
	const userID = req.body.creatoruserID;

	if (!videoID || !userID) {
		res.status(400).json({ message: 'No videoID or creatoruserID found' });
	}
	try {
		// const user = User.findById(req.user._id).exec();
		// const video = Video.findOne({ videoID }).exec();
		// const creator = User.findById(userID).exec();

		const [user, video, creator] = await Promise.all([
			User.findById(req.user._id).exec(),
			Video.findOne({ videoID }).exec(),
			User.findById(userID).exec(),
		]);
		if (user && video && creator && video.userID == creator._id) {
			let flag = user.heartedVideos.includes(video.videoID);

			if (!flag) {
				user.heartedVideos.push(video.videoID);
				video.hearts += 1;
				creator.totalHeartsReceived += 1;
				await creator.save();
				await user.save();
				await video.save();
				return res.status(200).json({ hearted: true });
			} else {
				user.heartedVideos = user.heartedVideos.filter(
					(id) => !id.equals(video.videoID)
				);
				video.hearts -= 1;
				creator.totalHeartsReceived += 1;
				await creator.save();
				await video.save();
				await user.save();
				return res.status(200).json({ hearted: false });
			}
		} else {
			return res.status(400).json({ message: 'Invalid video ID' });
		}
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ error: e.message });
	}
};

exports.shopOne = async (req, res) => {
	const videoID = req.body.videoID;
	const userID = req.body.creatoruserID;

	if (!videoID || !userID) {
		res.status(400).json({ message: 'No videoID or creatoruserID found' });
	}
	try {
		const user = User.findById(req.user._id).exec();
		const video = Video.findOne({ videoID }).exec();
		const creator = User.findById(userID).exec();

		await Promise.all([user, video, creator]).then(
			async ([user, video, creator]) => {
				if (user && video && creator && video.userID == creator._id) {
					let flag = user.shopedVideos.includes(video.videoID);
					if (!flag) {
						user.shopedVideos.push(video.videoID);
						creator.shopIconClicks += 1;
						await creator.save();
						await user.save();
						return res.status(200).json({ message: 'Vote Added' });
					} else {
						return res
							.status(200)
							.json({ message: 'Already added To shopped' });
					}
				} else {
					return res
						.status(400)
						.json({ message: 'Invalid video ID' });
				}
			}
		);
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ error: e.message });
	}
};
