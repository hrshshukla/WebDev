
// Select the database to use.
use('myDatabase');

// Insert a few documents into the sales collection.
db.getCollection('Course').insertMany([
    {
      "language": "Java",
      "price": 20000,
      "teacher": "Harsh"
    },
    {
      "language": "C#",
      "price": 19000,
      "teacher": "David"
    },
    {
      "language": "Ruby",
      "price": 17000,
      "teacher": "Olivia"
    },
    {
      "language": "Kotlin",
      "price": 20000,
      "teacher": "Noah"
    },
    {
      "language": "Swift",
      "price": 23000,
      "teacher": "Ava"
    },
    {
      "language": "PHP",
      "price": 16000,
      "teacher": "Ethan"
    }
]);


console.log(`database created successfully!!`);

