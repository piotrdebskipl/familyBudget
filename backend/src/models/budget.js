import mongoose from "mongoose";

const Schema = mongoose.Schema

const budget = new Schema({
    name: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    shared: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

export default mongoose.model('Budget', budget)