// Connection URL
const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://linhng92:linhng92@cluster0.wndr2gx.mongodb.net/citybikes?retryWrites=true&w=majority";

// Database Name
const dbName = "citybikes";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  const collection = db.collection("stationbikes");

  // Find some documents
  collection.find({}).toArray(function (err, docs) {
    console.log("Found the following records");
    console.log(docs);
  });

  client.close();
});
