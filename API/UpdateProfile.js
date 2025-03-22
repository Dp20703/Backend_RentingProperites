const connectDB = require("../DB/connectDB");
const { ObjectId } = require("mongodb");

async function UpdateProfile(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Register");
        const {
            id,
            firstName,
            lastName,
            email,
            phoneNo,
            password, } = req.body;
        const updateData = {
            $set: {
                firstName,
                lastName,
                email,
                phoneNo,
                password
            }
        }
        const result = await collection.updateOne({ _id: new ObjectId(id) }, updateData);
        if (result.modifiedCount == 0) {
            return res.status(400).json({ message: "No data found" });
        }
        else {
            return res.status(200).json({ message: "Profile Updated Successfully" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}
module.exports = { UpdateProfile };