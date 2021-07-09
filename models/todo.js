import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
    description:  String,
    completed: Boolean
});

export const Todo = mongoose.model("Todo", todoSchema);