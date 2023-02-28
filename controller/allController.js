const User = require("../models/login");
const Signupuser = require("../models/signup");
const Identification = require("../models/identification");
const Account = require("../models/account");

const loginUser = async (req, res) => {
  try {
    const { userid, password } = req.body;
    if (!userid || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Provide all necessary information",
      });
    }
    const user = await User.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({error});
  }
};

const signup = async (req, res) => {
  try {
    const user = await Signupuser.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({error});
  }
};

const identification = async (req, res) => {
  try {
    const identification = await Identification.create(req.body);
    res.status(201).json({ success: true, identification });
  } catch (error) {
    res.status(500).json({error});
  }
};
const account = async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.status(201).json({ success: true, account });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { loginUser, signup, identification, account };
