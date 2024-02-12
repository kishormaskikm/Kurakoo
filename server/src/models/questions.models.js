const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema(
    {
        questionText: {
            type: String,
            required: true,
            trim: true
        },
        questionLinks: {
            type: String,
            trim: true
        },
        tags: [{
            type: String,
            required: true,
            trim: true
        }],
        bookmarkedBy: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        updatedAt: Date,
        views: Number,
        upvotes: {
            type: Number
        },
        downvotes: {
            type: Number
        },
    },
    { timeStamps: true }
);

module.exports = mongoose.model("Questions", questionsSchema);
