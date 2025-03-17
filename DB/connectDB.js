const { MongoClient } = require("mongodb");

const url = "mongodb+srv://dp2073:1234@trio.6o0jg.mongodb.net/?retryWrites=true&w=majority&appName=Trio";
const client = new MongoClient(url);

async function connectDB() {
    try {
         await client.connect();
        console.log('Connected to the MongoDB Atlas');
        const database = client.db("RentingProperties");
        return database;

    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;