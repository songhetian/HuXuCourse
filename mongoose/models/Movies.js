import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, published: { type: Date, default: Date.now } }]
});

const MovieModel = mongoose.model('Movies', movieSchema);

export const insertMany = async () => {
    try {
        const m1 = new MovieModel({
            name: "哪吒2",
            ratings: 5,
            money: 60000,
            genre: ['动画', '动作'],
            isActive: true,
            comments: [{ value: "第一条评论" }]
        });
        const m2 = new MovieModel({
            name: "哪吒2-1",
            ratings: 5,
            money: 60000,
            genre: ['动画', '动作'],
            isActive: true,
            comments: [{ value: "第一条评论" }]
        });
        const m3 = new MovieModel({
            name: "哪吒3",
            ratings: 5,
            money: 60000,
            genre: ['动画', '动作'],
            isActive: true,
            comments: [{ value: "第一条评论" }]
        });
        const m4 = new MovieModel({
            name: "哪吒4",
            ratings: 5,
            money: 60000,
            genre: ['动画', '动作'],
            isActive: true,
            comments: [{ value: "第一条评论" }]
        });
        const m5 = new MovieModel({
            name: "哪吒5",
            ratings: 5,
            money: 60000,
            genre: ['动画', '动作'],
            isActive: true,
            comments: [{ value: "第一条评论" }]
        });
        const m6 = new MovieModel({
            name: "哪吒6",
            ratings: 5,
            money: 60000,
            genre: ['动画', '动作'],
            isActive: true,
            comments: [{ value: "第一条评论" }]
        });
        const result = await MovieModel.insertMany([m1, m2, m3, m4, m5, m6]);
        // const result = await m1.save();
    } catch (err) {
        console.log(err);
    }
}

//$and $or[]
export const singleDoc = async (id) => {
    try {
        const result = await MovieModel.findById(id, { name: 0 });
        console.log(result);


    } catch (err) {
        console.log(err);
    }
}

export const updateOne = async (id) => {
    try {
        // const result = await MovieModel.updateOne({ id: id }, { name: 'test' });
        const result = await MovieModel.findByIdAndUpdate(id, { name: 'fasfsdafasf' });
        console.log(result);

    } catch (err) {

    }
}






export default MovieModel;