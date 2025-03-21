const connectDB = require("../DB/connectDB");


async function manage_property(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Property");
        // const { owner_Id } = req.params; // Get owner_Id from request parameters
        const owner_Id = "2";
        const userData = await collection.find({ owner_Id }).toArray();
        if (userData.length === 0) {
            res.status(404).json({ message: "No Property Found" });
        }
        else {
            res.status(200).json({ message: "Property found Suceesfully", userDetails: userData })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

module.exports = { manage_property };