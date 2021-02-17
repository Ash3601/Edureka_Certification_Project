require("dotenv").config();
const mongoose = require("mongoose");

// mongodb atlas database name : db_media
const mongodb_url = process.env.MongoDB_Atlas;

mongoose
  .connect(mongodb_url, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });

// mongodb+srv://ash360:Google1234@cluster0.whgor.mongodb.net/test
