const dotenv = require("dotenv").config();
const uri = process.env.ATLAS_URI;
const mongoose = require("mongoose");

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
