const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/JokesAPI", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to database called JokesAPI"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));