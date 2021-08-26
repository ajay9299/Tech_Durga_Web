const express = require("express");
const app = express();
const router = new express.Router();

router.get("/gallery", (req, res) => {
  res.render("gallery");
});

module.exports = router;
