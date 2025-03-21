const connectDB = require("../DB/connectDB");

async function upload_property(req, res) {
    try {
        const db = await connectDB();
        const collection = db.collection("Property");


        const { property_Id, owner_Id, title, description, location, address, zipCode, propertyType, category, size, price, bedrooms, bathrooms, images: [], propertyIdentityType, propertyProof: [], amenities: [], identityType, identityId, } = req.body;

        await collection.insertOne({
            property_Id,
            owner_Id,
            title,
            description,
            location,
            address,
            zipCode,
            propertyType,
            category,
            size,
            price,
            bedrooms,
            bathrooms,
            images: [],
            propertyIdentityType,
            propertyProof: [],
            amenities: [],
            identityType,
            identityId,
        });
        return res.status(200).json({ message: "Property uploaded Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
}

module.exports = { upload_property };