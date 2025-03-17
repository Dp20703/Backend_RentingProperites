const connectDB = require('./DB/connectDB');
const express = require("express");
const cors = require("cors");
const { register_user } = require('./API/register_user');
const { register_owner } = require('./API/register_owner');
const { upload_property } = require('./API/upload_property');
const { send_feedback } = require('./API/send_feedback');


//connecting to database:
connectDB();

//middlewares:
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes:
app.post("/register_user", register_user);
app.post("/register_owner", register_owner);
app.post("/upload_property", upload_property);
app.post("/send_feedback", send_feedback);



//port:
const PORT = 8000;
app.listen(PORT);
console.log(`Server is listing on port http:localhost:${PORT}`)