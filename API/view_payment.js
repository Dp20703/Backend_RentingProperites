const connectDB = require("../DB/connectDB");


async function view_payments(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Payment");
        // const { owner_Id } = req.params; // Get owner_Id from request parameters
        const owner_Id = "1";
        const userData = await collection.find({ owner_Id }).toArray();
        if (userData.length === 0) {
            res.status(404).json({ message: "No Payment Found" });
        }
        else {
            res.status(200).json({ message: "Payment found Suceesfully", userDetails: userData })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

module.exports = { view_payments };