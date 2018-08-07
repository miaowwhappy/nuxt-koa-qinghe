import mongoose from "mongoose"

const EvaluationSchema = new mongoose.Schema({
    timeStarNum: Number,
    attitudeStarNum: Number,
    qualityStarNum: Number,
    tags: Array,
    content: String,
    addTime: {
        type: Date,
        default: new Date()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

export {
	EvaluationSchema
}