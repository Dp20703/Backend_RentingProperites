const connectDB = require('./DB/connectDB');
const express = require("express");
const cors = require("cors");
const { register_user } = require('./API/register_user');
const { register_owner } = require('./API/register_owner');
const { upload_property } = require('./API/upload_property');
const { send_feedback } = require('./API/send_feedback');
const { send_inquiry } = require('./API/send_inquiry');
const { send_request } = require('./API/send_request');
const { ContactUs } = require('./API/contactUs');
const { login } = require('./API/login');


//connecting to database:
connectDB();

//middlewares:
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes:
//user routes:
app.post("/register_user", register_user);

//owner routes:
app.post("/register_owner", register_owner);
app.post("/upload_property", upload_property);

//common routes:
app.post("/send_feedback", send_feedback);
app.post("/send_inquiry", send_inquiry);
app.post("/send_request", send_request);
app.post("/contactUs", ContactUs)
app.post("/login",login);




//port:
const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(`Server is listing on port http:localhost:${PORT}`)