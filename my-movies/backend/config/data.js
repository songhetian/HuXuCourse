import mongoose from "mongoose";

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("连接成功");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;