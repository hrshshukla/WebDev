import express from 'express'; 
import mongoose from 'mongoose';
import { dummyData } from './model/dummyData.js';

mongoose.connect('mongodb://localhost:27017/company')

const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index',{foo : 'FOO'})
});

function randomNum() {
  let number = Math.floor(Math.random() * 3) // random number from 0 - 2
  return number
}

app.get('/generate', async (req, res) => {

  await dummyData.deleteMany({})

  let nameArr = ['harsh', 'adarsh', 'harry']
  let salaryArr = [50000, 60000, 90000]
  let languageArr = ['c++', 'js', 'java']
  let cityArr = ['satna', 'bhopal', 'delhi']
  let isManagerArr = [true, true, false]

  for (let index = 0; index < 10; index++) {

    const data = new dummyData({
      name: nameArr[randomNum()] ,
      salary: salaryArr[randomNum()],
      language: languageArr[randomNum()],
      city:cityArr[randomNum()] ,
      isManager: isManagerArr[randomNum()] 
    })  
    
    await data.save()
  }

  console.log('Data inserted successfully!!');
  

  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});