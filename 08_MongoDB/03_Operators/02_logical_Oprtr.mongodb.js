// We will learn 
// -> $and
// -> $or
// -> $not
// -> $nor

use('Operators')

db.createCollection('logical')
db.logical.deleteMany({})

db.logical.insertMany([
  { name: "Alice",   age: 21, marks: 85 },
  { name: "Bob",     age: 18, marks: 70 },
  { name: "Charlie", age: 24, marks: 90 },
  { name: "David",   age: 22, marks: 60 }
])

// $and : students whose age is more than 20 && marks less than 70 
db.logical.find( 
    {$and : [
        { age : {$gt : 20}},
        { marks : {$lt : 70} }
    ]}
).forEach(student =>{ console.log("$and : ", student) })

// We can also write it as :
// db.logical.find({ age: { $gt: 20 }, marks: { $lt: 90 } })

// $or : students whoes age are either less than 20 or marks more than 80
db.logical.find({
    $or:[
        {age : {$lt : 20}},
        {marks : {$gt: 80}}
    ]
}).forEach(student =>{ console.log("$or : ", student) })

// $not : students whose marks are not greater than 80
db.logical.find({ marks : {$not : { $gt : 80}}  }).forEach(student => console.log(" $not : ", student)
)

// $nor : either age is not less than 20 or marks are not more than 80
db.logical.find({ 
    $nor:[
        { age: {$gt : 20}},
        { marks: {$lt  : 80}}
    ]
}).forEach(student => {  console.log(student)  });