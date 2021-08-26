const express = require("express");
const app = express();
const router = new express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
