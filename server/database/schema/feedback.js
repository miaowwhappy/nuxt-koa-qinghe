import mongoose from "mongoose"


const FeedbackSchema = new mongoose.Schema({
    content: String,
    tel: String,
    addTime: {
        type: Date,
        default: new Date()

    },
})

export {
	FeedbackSchema
}