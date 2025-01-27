const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const user = require("../models/user.js");

dotenv.config();

const login = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await user.findOne({ email });

  if (!userExists) {
    return res.status(401).send({ error: "Invalid credentials" });
  }

  const passwordMatch = await bcrypt.compare(password, userExists.password);

  if (!passwordMatch) {
    return res.status(401).send({ error: "Invalid credentials" });
  }
  //login successful
  const token = await userExists.generateAuthToken();
  return res.status(200).send({ message: "Login successful", token });
};

const register = async (req, res) => {
  const { name, email, password, phone, state, role } = req.body;

  if (!name || !email || !password || !phone || !state || !role) {
    return res.status(422).json({ error: "All fields are required" });
  }

  try {
    const saltrounds = Number(process.env.HASHING_SALT_ROUNDS);
    const hashedNumber = await bcrypt.hash(phone, saltrounds);
    const hashedPassword = await bcrypt.hash(password, saltrounds);

    const userData = {
      name,
      email,
      password: hashedPassword,
      phone: hashedNumber,
      state,
      role,
    };

    //ccreate a new user
    const newUser = new user(userData);
    //save the user in the database
    const savedUser = await newUser.save();
    //return the user data
    return res.status(201).send(savedUser);
  } catch (error) {
    console.log("error in register route : ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { login, register };
