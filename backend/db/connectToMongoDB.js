import mongoose from "mongoose";
const url="mongodb+srv://Vanshika:Vanshika123@cluster0.tb5mdls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(url);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
