// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const UserModel = require("../models/UserModel");
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

// Function to generate a JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, "yourSecretKey", { expiresIn: "1h" });
};

// Controller for user registration
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserModel({
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate the JWT token
    const token = generateToken(newUser._id);

    res.status(201).json({ userId: newUser._id, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during registration." });
  }
};

// Controller for user login
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password." });
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Incorrect username or password." });
    }

    // Generate the JWT token
    const token = generateToken(user._id);

    res.status(200).json({ userId: user._id, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during login." });
  }
};

export default {
  registerUser,
  loginUser,
};
