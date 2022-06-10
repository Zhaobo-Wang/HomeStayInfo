const FormSchema = require("../models/form");
const tryCatchWrapper = require("../middleware/tryCatchWrapper");

// [Get] get all forms
const getAllForm = tryCatchWrapper(async (req, res) => {
  if (req.query) {
    const forms = await FormSchema.find(req.query);
    res.status(200).json({ forms });
  } else {
    const forms = await FormSchema.find({});
    res.status(200).json({ forms });
  }
});

// [Get] get all forms with star
const getStarForm = tryCatchWrapper(async (req, res, next) => {
  const forms = await FormSchema.find({ star: true });
  if (forms.length === 0) {
    throw new Error("You do not have any preference");
  }
  res.status(200).json({ forms });
});

// [Patch] update the form (by their star)
const updateForm_star_condition = tryCatchWrapper(async (req, res, next) => {
  // find the star state
  const form_id = req.params.id;
  const getForm = await FormSchema.findOne({ _id: form_id });
  // if !getForm, it is a bad request error, no form founded

  // update the star state
  const form_star_state = getForm.star;
  const form = await FormSchema.findOneAndUpdate(
    { _id: form_id },
    { star: !form_star_state }
  );

  res.status(200).json({ form });
});

// [Patch] update the form (by their likes)
const updateForm_like_condition = tryCatchWrapper(async (req, res) => {
  // find the count state
  const form_id = req.params.id;
  const getForm = await FormSchema.findOne({ _id: form_id });
  // if !getForm, it is a bad request error, no form founded

  // update the count state
  const count = getForm.count;
  const form = await FormSchema.findOneAndUpdate(
    { _id: form_id },
    { count: count + 1 }
  );

  res.status(200).json({ form });
});

// [Post] create one form
const createForm = tryCatchWrapper(async (req, res) => {
  console.log(req.body);
  const form = await FormSchema.create(req.body);
  res.status(201).json({ form });
});

// [Delete] delete one form
const deleteForm = tryCatchWrapper(async (req, res) => {
  const formID = req.params.id;
  const form = await FormSchema.findOneAndDelete({ _id: formID });
  // if !form, it is a bad request error, no form founded

  res.status(200).json({ form });
});

module.exports = {
  createForm,
  getAllForm,
  deleteForm,
  getStarForm,
  updateForm_star_condition,
  updateForm_like_condition,
};
