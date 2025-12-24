use('Operators')

db.createCollection('Comparison')

db.Comparison.deleteMany({})

db.Comparison.insertMany([
  { "name": "Alice", "age": 21, "marks": 85, "hobbies": ["reading", "sports"] },
  { "name": "Bob", "age": 18, "marks": 70, "hobbies": ["gaming", "football"] },
  { "name": "Charlie", "age": 24, "marks": 90, "hobbies" : ["gaming", "football"]},
  { "name": "David", "age": 22, "marks": 60, "hobbies": ["reading", "chess", "music"] }
])

// 1. $eq : Students with marks = 90
let equal_Comaprison = db.Comparison.find({marks : { $eq : 90}})
console.log("This is equal-to : ",equal_Comaprison);


// 2. $gt and $lt : Students with age > 20 and marks < 90 
let gt_lt = db.Comparison.find({age : {$gt : 20}, marks : {$lt : 90}}).toArray()
console.log("This is greater-than & less-than : ", gt_lt);

// 3. $ne : students whose marks are != 90 
let ne = db.Comparison.find({marks : {$ne : 90}}).forEach(student =>{console.log(student)})

// 4. $in : Matches students with either "reading" or "sports"
db.Comparison.find({ hobbies: { $in: ["reading", "sports"] } }).forEach(student => console.log(student))


// 5. $all : Matches students with BOTH "reading" and "sports"
db.Comparison.find({ hobbies: { $all: ["reading", "sports"] } }).forEach(student => console.log(student))