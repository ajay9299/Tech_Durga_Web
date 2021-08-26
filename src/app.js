const { SSL_OP_SINGLE_DH_USE } = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");

// PORT NUMBER--->
const Port = process.env.PORT || 3000;

// BODY PARSER--->
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// PATH
const staticPath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// TO SET VIEW ENGINE--->
app.set("view engine", "hbs");
app.set("views", tempPath);
hbs.registerPartials(partialPath);

// BUILTIN MIDDLEWARE
app.use(express.static(staticPath));

// REQUIRE ROUTER--->
const homerouter = require("./routers/home");
const aboutrouter = require("./routers/about");
const servicerouter = require("./routers/service");
const contactrouter = require("./routers/contact");
const galleryrouter = require("./routers/gallery");

// CALL ROUTERS--->
app.use(homerouter);
app.use(aboutrouter);
app.use(servicerouter);
app.use(contactrouter);
app.use(galleryrouter);

app.listen(Port, () => {
  console.log(`Listennig port ${Port}`);
});
