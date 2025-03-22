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
const { FetchAllUser } = require('./API/FetchAllUser');
const { FetchAllOwner } = require('./API/FetchAllOwner');
const { FetchAllProperty } = require('./API/FetchAllProperty');
const { FetchAllRequest } = require('./API/FetchAllRequest');
const { FetchAllFeedback } = require('./API/FetchAllFeedback');
const { FetchAllInquiry } = require('./API/FetchAllInquiry');
const { send_complaint } = require('./API/send_complaint');
const { FetchAllComplaint } = require('./API/FetchAllComplaint');
const { booking } = require('./API/make_booking');
const { FetchAllBooking } = require('./API/FetchAllBooking');
const { make_payment } = require('./API/make_payment');
const { FetchAllPayments } = require('./API/FetchAllPayments');
const { manage_bookings } = require('./API/manage_bookings');
const { view_payments } = require('./API/view_payment');
const { manage_property } = require('./API/manage_property');
const { UpdateProfile } = require('./API/UpdateProfile');



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
app.post("/make_booking", booking);
app.post("/make_payment", make_payment);

//owner routes:
app.post("/register_owner", register_owner);
app.post("/upload_property", upload_property);
app.get("/manage_booking", manage_bookings);
app.get("/manage_property", manage_property);
app.get("/view_payment", view_payments);

//common routes:
app.post("/login", login);
app.post("/contactUs", ContactUs);
app.post("/send_inquiry", send_inquiry);
app.post("/send_request", send_request);
app.post("/send_feedback", send_feedback);
app.post("/send_complaint", send_complaint);
app.post("/update_profile", UpdateProfile);

//admin routes:
app.get("/fetch_all_user", FetchAllUser);
app.get("/fetch_all_owner", FetchAllOwner);
app.get("/fetch_all_property", FetchAllProperty);
app.get("/fetch_all_request", FetchAllRequest);
app.get("/fetch_all_inquiry", FetchAllInquiry);
app.get("/fetch_all_booking", FetchAllBooking);
app.get("/fetch_all_payment", FetchAllPayments);
app.get("/fetch_all_feedback", FetchAllFeedback);
app.get("/fetch_all_complaint", FetchAllComplaint);



//port:
const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(`Server is listing on port http:localhost:${PORT}`)