const connectDB = require("../DB/connectDB");

async function register_owner(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Login");

    const { l_Id, firstName, lastName, email, phoneNo, password } = req.body;

    await collection.insertOne({
      l_Id,
      firstName,
      lastName,
      email,
      phoneNo,
      password,
    });
    return res.status(200).json({ message: "Owner created Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error" });
  }
}

module.exports = { register_owner };