const connectDB = require("../DB/connectDB");


async function FetchAllProperty(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Property");
        const userData = await collection.find().toArray();
        if (userData == 0) {
            res.status(404).json({ message: "No property Found" });
        }
        else {
            res.status(200).json({ message: "Property found Suceesfully", userDetails: userData })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

module.exports = { FetchAllProperty };