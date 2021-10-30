const { User } = require('../../user/user.model');
const { Video } = require('./video.model');

exports.getAll = async (req, res) => {
    try {
        const videos = await Video.find({}).lean().exec();
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
            creator: req.user._id,
            channelName: req.user.channelName,
            hearts: 0,
        });
        return res.status(200).json(video);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ error: e.message });
    }
};

exports.heartOne = async (req, res) => {
    const videoID = req.body.videoID;
    if (!videoID) {
        res.status(400).json({ messgae: 'No videoID found' });
    }
    try {
        const user = User.findById(req.user._id).exec();
        const video = Video.findOne({ videoID }).exec();
        await Promise.all([user, video]).then(async ([user, video]) => {
            if (user && video) {
                let flag = user.heartedVideos.includes(video.videoID);

                if (!flag) {
                    user.heartedVideos.push(video.videoID);
                    video.hearts += 1;
                    await user.save();
                    await video.save();
                    return res.status(200).json({ message: 'Vote Added' });
                } else {
                    user.heartedVideos = user.heartedVideos.filter(
                        (id) => !id.equals(video.videoID)
                    );
                    video.hearts -= 1;
                    await video.save();
                    await user.save();
                    return res
                        .status(200)
                        .json({ message: 'vote Removed', video, user });
                }
            } else {
                return res.status(400).json({ message: 'Invalid video ID' });
            }
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ error: e.message });
    }
};

exports.shopOne = async (req, res) => {
    const videoID = req.body.videoID;

    try {
        const user = User.findById(req.user._id).exec();
        const video = Video.findOne({ videoID }).exec();
        await Promise.all([user, video]).then(async ([user, video]) => {
            if (user && video) {
                let flag = user.shopedVideos.includes(video.videoID);

                if (!flag) {
                    user.shopedVideos.push(video.videoID);
                    video.hearts += 1;
                    await user.save();
                    await video.save();
                    return res.status(200).json({ message: 'Vote Added' });
                } else {
                    user.shopedVideos = user.shopedVideos.filter(
                        (id) => !id.equals(video.videoID)
                    );
                    video.hearts -= 1;
                    await video.save();
                    await user.save();
                    return res
                        .status(200)
                        .json({ message: 'vote Removed', video, user });
                }
            } else {
                return res.status(400).json({ message: 'Invalid video ID' });
            }
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ error: e.message });
    }
};
