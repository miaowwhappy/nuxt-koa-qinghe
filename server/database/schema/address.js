import mongoose from "mongoose"


const AddressSchema = new mongoose.Schema({
    name: String,
    gender: String,
    tel: String,
    city: String,
    address: String,
    isDefault: false,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

export {
	AddressSchema
}