const connectDB = require("../DB/connectDB");


async function manage_bookings(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Booking");
        // const { owner_Id } = req.params; // Get owner_Id from request parameters
        const owner_Id = "2";
        const userData = await collection.find({ owner_Id }).toArray();
        if (userData.length === 0) {
            res.status(404).json({ message: "No Booking Found" });
        }
        else {
            res.status(200).json({ message: "Booking found Suceesfully", userDetails: userData })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

module.exports = { manage_bookings };