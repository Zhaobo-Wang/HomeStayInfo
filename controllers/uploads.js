const tryCatchWrapper = require("../middleware/tryCatchWrapper");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

//locally
const uploadImageOnServer = tryCatchWrapper(async (req, res) => {
  if (!req.files) {
    throw new Error("Please upload a file");
  }
  const productImage = req.files.Image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new Error("Please upload an image");
  }
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new Error("Please upload an image smaller than 1MB");
  }
  const imagePath = path.join(
    __dirname,
    `../src/img/uploads/${productImage.name}`
  );
  await productImage.mv(imagePath);
  return res
    .status(201)
    .json({ image: { src: `/uploads/${productImage.name}` } });
});

//cloud
const uploadImageCoverCloudinary = tryCatchWrapper(async (req, res) => {
  if (!req.files) {
    throw new Error("Please upload a file");
  }
  const productImage = req.files.Image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new Error("Please upload an image");
  }
  const maxSize = 1024 * 1024 * 2;
  if (productImage.size > maxSize) {
    throw new Error("Please upload an image less than 2MB");
  }
  await cloudinary.uploader
    .upload(productImage.tempFilePath, {
      use_filename: true,
      folder: "HomeStayInfo",
      tags: ["cover"],
    })
    .then((result) => {
      fs.unlinkSync(productImage.tempFilePath);
      console.log(result);
      return res.status(201).json({ image: { src: result.secure_url } });
    })
    .catch((error) => {
      throw new Error(error);
    });
});

module.exports = uploadImageCoverCloudinary;
