const User = require("../models/init");
const contSchema = require("../models/contact");
const servicesSchema = require("../models/services");
const wrapAsync = require('../utils/wrapAsync');
const ExpressError = require("../utils/ExpressError");


const home = wrapAsync(async (req, res) => {
  const { _id } = req.query;

  if (!_id) {
    return res.status(400).json({ msg: "User ID is required" });
  }

  const userData = await User.findById(_id).select('-password');

  if (!userData) {
    return res.status(404).json({ msg: "User not found" });
  }

  res.status(200).json(userData);
});



const register = wrapAsync(async (req, res) => {
  const { name, email, password } = req.validatedData;

  const existUser = await User.findOne({ email });
  if (existUser) throw new ExpressError("User already exists", 409);

  const user = await User.create({ name, email, password });

  res.status(201).json({
    success: true,
    msg: "Register successful",
    user,
  });
});


const login = wrapAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new ExpressError("User not found", 400);

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new ExpressError("Wrong Password", 400);

  const token = user.generateToken();

  res.status(200).json({
    success: true,
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email
    }
  });
});


const contact = wrapAsync(async (req, res) => {
  const { name, email, message } = req.validatedData;
  const Contact = await contSchema.create({ name, email, message });
  res.status(201).json({
    success: true,
    msg: "Register successful",
    Contact,
  });
});


// const profile = wrapAsync(async (req, res) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.userId).select("-password");

//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.status(200).json({ success: true, user });
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// });

const profile = wrapAsync(async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
});

const service = wrapAsync(async (req, res) => {
  const { service, description, price, provider, image } = req.validatedData;
  const Contact = await servicesSchema.create({ service, description, price, provider, image });
  res.status(201).json({
    success: true,
    msg: "Courses successful",
    Contact,
  });
});




const listOFcourse = wrapAsync(async (req, res) => {
  const services = await servicesSchema.find();
  res.status(201).json({
    success: true,
    msg: "all data",
    services,
  });
  console.log(service);
});





module.exports = {
  home, register, login, contact, profile, service, listOFcourse
};