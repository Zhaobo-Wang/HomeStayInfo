const express = require("express");
const router = express.Router();
const {
  createForm,
  getAllForm,
  deleteForm,
  getStarForm,
  updateForm_star_condition,
  updateForm_like_condition,
} = require("../controllers/tasks");

const uploadImageCoverCloudinary = require("../controllers/uploads");

router.route("/").get(getAllForm).post(createForm);
router.route("/:id").delete(deleteForm);
router.route("/star").get(getStarForm);
router.route("/star/:id").patch(updateForm_star_condition);
router.route("/like/:id").patch(updateForm_like_condition);
router.route("/uploads/cover").post(uploadImageCoverCloudinary);

module.exports = router;
