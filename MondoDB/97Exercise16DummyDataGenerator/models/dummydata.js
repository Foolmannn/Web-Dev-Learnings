import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
name: String,
salary: Number,
language: String,
city: String,
isManager : Boolean
});

export const dummydata = mongoose.model('dummydata' , todoSchema);