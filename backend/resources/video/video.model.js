const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        videoLink: {
            type: String,
            required: true,
            trim: true,
        },
        productLink: {
            type: String,
            required: true,
            trim: true,
        },
        orderID: {
            type: String,
            required: true,
            trim: true,
        },
        creator: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true,
        },
        channelName: {
            type: String,
            required: true,
        },
        hearts: {
            type: Number,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);
videoSchema.virtual('videoID').get(function () {
    return this._id;
});

module.exports.Video = mongoose.model('video', videoSchema);
