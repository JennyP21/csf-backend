const mongoose = require("mongoose");

module.exports = function () {
  MONGODB_URI =
    "mongodb+srv://root:Ja6WGAYQ7BCX8BoJ@csf.hjh4czo.mongodb.net/csf?retryWrites=true&w=majority&appName=CSF";
  try {
    mongoose
      .connect(MONGODB_URI)
      .then(() => console.log("Connected to database..."));
  } catch (error) {
    console.log(error);
  }
};
