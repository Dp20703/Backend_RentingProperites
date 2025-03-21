const connectDB = require("../DB/connectDB");

async function make_payment(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Payment");
        const { payment_Id, user_Id, property_Id, owner_Id, booking_Id, amount, paymentMethod, transactionId } = req.body;
        await collection.insertOne({
            payment_Id,
            user_Id,
            property_Id,
            owner_Id,
            booking_Id,
            amount,
            paymentDate: new Date().toISOString().split("T")[0],// Auto-fill today's date
            paymentMethod,
            transactionId,
            status: "pending"
        })

        return res.status(200).json({ message: "Payment made Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}
module.exports = { make_payment };