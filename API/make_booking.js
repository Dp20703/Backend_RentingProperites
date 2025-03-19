const connectDB = require("../DB/connectDB");

async function booking(req, res) {
    try {

        const db = await connectDB();
        const collection = db.collection("Booking");

        const { booking_Id, user_Id, property_Id, owner_Id, startDate, endDate } = req.body;

        collection.insertOne({
            booking_Id,
            user_Id,
            property_Id,
            owner_Id,
            bookingDate: new Date(),
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            status: "Pending",
        });
        res.status(201).json({ message: "Booking created successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Inter server error" })
    }
}
module.exports = { booking };