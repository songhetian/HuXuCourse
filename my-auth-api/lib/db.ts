import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI!);
		console.log('连接成功');
	} catch (error: any) {
		console.error(error.message);
		process.exit(1);
	}
};

export default connectDB;
