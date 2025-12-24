import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.static("public"));

// Global middleware
app.use((req, res, next) => {
    console.log(`This is Middleware 1`);
    console.log(req.headers);
    req.myName = "Harsh Shukla"
    fs.appendFileSync("logs.txt",`Date ${new Date().toString()} method ${req.method} \n`)
    
    next()
});

app.use((req, res, next) => {
    console.log("This is Middleware 2");
    next();
});

// Route
app.get('/', (req, res) => {
    res.send('Hello World!' + req.myName);
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});