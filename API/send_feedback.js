const connectDB = require("../DB/connectDB");

async function send_feedback(req,res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Feedback");
        const { feedback_Id, user_Id, owner_Id, feedbackDate, rating,response, comments } = req.body;
        await collection.insertOne({
            feedback_Id,
            user_Id,
            owner_Id,
            feedbackDate,
            rating,
            response,
            comments,
        });
        return res.status(200).json({ message: "Feedack sent Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

module.exports = { send_feedback };