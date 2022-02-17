import mongoose from "mongoose";

const Schema = mongoose.Schema

const outcome = new Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    budget: { type: Schema.Types.ObjectId, ref: 'Budget' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
})

export default mongoose.model('Outcome', outcome)