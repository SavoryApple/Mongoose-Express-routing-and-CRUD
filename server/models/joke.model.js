const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	//defining a new schema called UserSchema that has the following fields:
	{
		setup: {
			type: String,
			required: [true, "setup to the joke is required"],
			minlength: [10, "First name must be at least 10 characters long"]
		},
		punchline: {
			type: String,
			required: [true, "punchline is required, dont leave us hanging!"],
			minlength: [3, "punchline must be at least 3 characters long"]
		},
	},
	{ timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;