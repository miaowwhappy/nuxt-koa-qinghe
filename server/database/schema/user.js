import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    name: String,
    password: String
})

export {
	UserSchema
}