const express = require("express");
const app = express();
const router = new express.Router();

router.get("/service", (req, res) => {
  res.render("service");
});

module.exports = router;
