const router = require('express').Router();
const {
  loginUser,
  signup,
  identification,
  account,
} = require("../controller/allController");

router.post("/login", loginUser);
router.post("/signup", signup);
router.post("/identification", identification);
router.post("/account", account);

module.exports = router;
