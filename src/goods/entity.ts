import { Schema, model } from "mongoose";

const Goods = new Schema({
    title: { type: String, required: true, },
    price: { type: Number, required: true, min: 0 },
    stock: Number,
    description: String,
    image: String,
    category: String,
    createdAt: Date,
    updatedAt: Date,
});

export default model("Goods", Goods);