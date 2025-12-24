import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
//  Heading : {type : String, default : "Hey this is default Heading"},
    Heading : String,
    detail : String,
    code : Number
})

//                  mongoose.model( name, schema, collectionName)
export const Todo = mongoose.model('myTodo', TodoSchema)
// here the "myTodo" is the model name as well as it is the name of collection also 

// By default, Mongoose lowercases then -> pluralizes the "modelName" to create a collection.
// means "myTodo" → lowercase → "mytodo" → pluralize → "mytodos"

// So 

// todo (database) -> created from "mongodb://localhost:27017/todo" inside "main.js"
//  |- mytodos (collection)