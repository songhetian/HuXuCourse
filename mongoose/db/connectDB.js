import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("数据库已经连接");

    } catch (error) {
        console.log(error);

    }
}

export default connectDB;