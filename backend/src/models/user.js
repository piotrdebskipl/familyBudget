import mongoose from "mongoose";

const Schema = mongoose.Schema

const user = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    budgets: [{ type: Schema.Types.ObjectId, ref: 'Budget' }]
})

export default mongoose.model('User', user)