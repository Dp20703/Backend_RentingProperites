const connectDB = require("../DB/connectDB");

async function send_request(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Request");
        const {request_Id,user_Id,property_Id,owner_Id,startDate,endDate} = req.body;
        await collection.insertOne({
            request_Id,
            user_Id,
            property_Id,
            owner_Id,
            startDate,
            endDate,
            status:"Pending",
        });
        return res.status(200).json({ message: "Request sent Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

module.exports = { send_request };