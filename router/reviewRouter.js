const express = require("express");
const reviewRouter = express.Router();
const { Review } = require("../models");


reviewRouter.get("/:id", async (req, res) => {
    console.log("****Get Single Shop's Reviews Request Received on Back-End");
    try {
        const reviewData = await Review.find({
            shopId: req.params.id
        });
        res.send(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
});

reviewRouter.post("/", (req, res) => {
    Review.create({
        shopId: req.body.shopId,
        userName: req.body.userName,
        text: req.body.reviewInput,
    });
    console.log("New Review Posted!");
});

// reviewRouter.post("/reviews/update", (req, res) => {
//     console.log("Update Reviews Route Hit");
//     TacoShop.updateOne(
//         { _id: req.body.shopId },
//         {
//             $push: {
//                 reviews: req.body.reviewInput,
//             },
//         },
//         (_err) => { }
//     );
// });

// reviewRouter.post("/update", (req, res) => {
//     TacoShop.updateOne(
//         { _id: req.body.id },
//         {
//             $push: {
//                 rating: req.body.index,
//             },
//         },
//         (_err) => { }
//     );
// });

module.exports = reviewRouter;
