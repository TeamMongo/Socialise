const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		email: String,
		given_name: String,
		family_name: String,
		picture: String,
		age: Number,
		gender: String,
		channelName: {
			type: String,
		},
		displayName: {
			type: String,
			trim: true,
		},
		gid: {
			type: String,
			required: true,
			unique: true,
			immutable: true,
		},
		newuser: {
			type: Boolean,
			required: true,
		},
		heartedVideos: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'video',
			},
		],
		shopedVideos: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: 'video',
			},
		],
	},
	{ timestamps: true }
);

module.exports.User = mongoose.model('user', userSchema);
