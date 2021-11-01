const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		email: String,
		given_name: String,
		family_name: String,
		picture: String,
		age: Number,
		gender: String,
		progressPower: {
			type: Number,
			default: 1,
		},
		points: {
			type: Number,
			default: 0,
		},
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
		totalHeartsReceived: {
			type: Number,
			default: 0,
		},
		shopIconClicks: {
			type: Number,
			default: 0,
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
userSchema.virtual('userID').get(function () {
	return this._id;
});
module.exports.User = mongoose.model('user', userSchema);
