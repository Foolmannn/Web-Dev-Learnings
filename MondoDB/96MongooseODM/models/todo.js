// https://mongoosejs.com/

import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title: {type: String, required: true ,default: "WElcome"}, // schema can be object and we can keep the constraints
    desc : String,
    isDone :Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo' , TodoSchema);