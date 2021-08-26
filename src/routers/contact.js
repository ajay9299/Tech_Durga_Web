const express = require("express");
const app = express();
const router = new express.Router();
const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
const Client = require("../models/client");
require("../db/conn");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact", async (req, res) => {
  try {
    const data = new Client({
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      phone: req.body.phone,
      message: req.body.message,
    });

    const finalData = await data.save();
    res.status(201).render("home");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
