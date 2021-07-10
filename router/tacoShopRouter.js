const express = require("express");
const tacoShopRouter = express.Router();
const { TacoShop } = require("../models");
const multer = require('multer');

// create route to return all tacoshops
tacoShopRouter.get("/", async (req, res) => {
  try {
    const tacoShopData = await TacoShop.find({})
    res.json(tacoShopData);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
});

tacoShopRouter.get("/:id", async (req, res) => {
  try {
    const shopData = await TacoShop.findById(req.params.id)
    res.send(shopData);
  } catch (err) {
    res.status(500).json(err);
  }
});



tacoShopRouter.post("/reviews/update", (req, res) => {
  TacoShop.updateOne(
    { _id: req.body.shopId },
    {
      $push: {
        reviews: req.body.reviewInput,
      },
    },
    (_err) => { }
  );
});

tacoShopRouter.post("/update", (req, res) => {
  TacoShop.updateOne(
    { _id: req.body.id },
    {
      $push: {
        rating: req.body.index,
      },
    },
    (_err) => { }
  );
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})


const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

tacoShopRouter.post("/", upload.single("file"), async (req, res) => {
  let photoPath
  if (req.file) {
    photoPath = req.file.path
  } else {
    photoPath = "uploads\\ts1.jpg"
  }
  try {
    await TacoShop.create({
      shopName: req.body.name,
      imagePath: photoPath,
      reviews: req.body.reviews,
      menuURL: req.body.menuURL,
      rating: req.body.rating,
      description: req.body.description,
      featuredFood: req.body.featuredFood,
      address: req.body.address,
      location: req.body.location,
      state: req.body.state,
      city: req.body.city,
      phone: req.body.phone,
      zip: req.body.zip,
    });
    console.log("SHOP CREATED SUCCESSFULLY")
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});














module.exports = tacoShopRouter;
