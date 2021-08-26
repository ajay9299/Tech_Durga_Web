const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://tech_durga_123:tech1234@cluster0.gqszm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });
