// We will learn : CRUD
// Create - Read - Update - Delete

// Tip : when we use insertOne(), insertMany() or insert() 
//       then we give a object type of data 
//      And that data get stored as json file 


// (1) Create 
// Step 1 : Creating Database instance
use('crudDB');

// Step 2 : Creating collection inside database
db.createCollection('course')

// Step 3 : Inserting single data/document at a time inside collection (course) 
// Takes single object and store it as JSON document 
db.course.insertOne(
    {
        Heading : "Inserting Single data Only",
        Quantity : 1
    }
)

// Inserting multiple data/document at a time 
// Takes Array of objects and store all inside a JSON document
db.course.insertMany([
  {
    "Heading" : "Inserting Multiple data",
    "language": "Java",
    "price": 20000,
    "teacher": "Harry"
  },
  {
    "language": "JavaScript",
    "price": 22000,
    "teacher": "Emma"
  },
  {
    "language": "C#",
    "price": 19000,
    "teacher": "David"
  }
]
)

// (2) Read 
//-----------------------------------------------------------------------
// find() -> returns all those objects that matches with search result 
let ArrayOf_20k_Courses = db.course.find({price : 20000}).toArray() // to get all matched objects inside one array 

// Count matching documents
let count = db.course.countDocuments({price : 20000})
console.log(count);


// findOne() -> returns the first object that matches with search result 
let first_courseOf_20k = db.course.findOne({price : 20000})

console.log(first_courseOf_20k);


// UPDATE 
//-------------------------------------------------------------------------
// To update single document 
db.course.updateOne({price : 20000}, {$set:{price : 29999}})

// To multiple documents 
db.course.updateMany({price : 19000}, {$set:{price : 18000}})

// DELETE 
// To delete single document 
db.course.deleteMany({Quantity : 1})