const express = require('express');
const multer = require('multer');
const ImageModel = require('../models/imageModel');
const fs = require('fs');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("testImage"), (req, res) => {
  const saveImage =  ImageModel({
    name: req.body.name,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  saveImage.save()
      .then((res) => {
          console.log("image is saved");
      })
      .catch((err) => console.log(err, "error has occured."));
      res.status(200).json(saveImage);
});

router.get('/', async (req, res) => {
  const allData = await ImageModel.find()
  res.status(200).json(allData);
})

module.exports = router;