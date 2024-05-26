const express = require("express");
const cors = require("cors");
const reviews = require("../routes/reviews");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/api/product/reviews", reviews);
};
