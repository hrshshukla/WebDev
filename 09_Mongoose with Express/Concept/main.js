// There a package called "mongodb" which is very beginner friendly and beginner tasks
// Also there is another advanced package called "mongoose" which we will use 

// without mongoose : express --> data insert --> mongoDB (lack of data validation)
// with mongoose : express --> data --> mongoose --> validation + data insert --> mongoDB 

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

await mongoose.connect("mongodb://localhost:27017/todo") // here "todo" will create a database folder named as "todo" in mongoDB 
                                                         // and collection name will be decided from ./module/todo.js

const app = express()
const port = 3000

app.get('/',(req, res)=>{

    const todo = new Todo({ Heading: "Admission", detail : "PCB student", code : 54 })
    todo.save() // mongoose pre built methods 

    res.send("Hello World")
})

app.get('/x',async (req, res)=>{

    const todo = await Todo.findOne()
    res.json({Heading : todo.Heading, detail : todo.detail, code : todo.code})
})

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
})