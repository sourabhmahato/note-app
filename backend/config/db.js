const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			"mongodb+srv://sourabh:sourabh123@cluster0.jjv13.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
			}
		);
		console.log(`Database connected : ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit();
	}
};

module.exports = connectDB;
