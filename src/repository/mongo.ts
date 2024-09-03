import mongoose from "mongoose";

export async function connect() {
    await mongoose.connect("mongodb://localhost:27017/test", {});
    console.log('Mongo connected');
}
