const express = require("express");
const router = express.Router();
const { Review } = require("../models/review");

/*
    WE CAN DO FOLLOWING TO GET ALL REVIEWS HOWEVER IT IS NOT GOOD TO GIVE ALL REVIEWS TO USER RATHER LIST REVIEWS BASED ON PRODUCT ID.

    router.get("/", async (req, res) => {
      const allreviews = await Review.find();

      res.send(allreviews);
    });
*/

router.post("/", async (req, res) => {
  const { product_id, name, email, review } = req.body;
  const newReview = new Review({
    product_id,
    name,
    email,
    review,
  });
  await newReview.save();

  res.send(newReview);
});

router.get("/:product_id", async (req, res) => {
  const reviews = await Review.find({
    product_id: req.params.product_id,
  });

  if (!reviews)
    return res
      .status(404)
      .send(
        "Reviews with given Product ID was not found..."
      );

  res.send(reviews);
});

module.exports = router;
