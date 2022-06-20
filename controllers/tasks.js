const FormSchema = require("../models/form");
const tryCatchWrapper = require("../middleware/tryCatchWrapper");

// [Get] get all forms
const getAllForm = tryCatchWrapper(async (req, res) => {
  const { country, city, sort } = req.query;
  const queryObject = {};
  console.log(sort); // sort is a string type in here
  console.log(country);
  console.log(city);
  // queryObject.country = country;
  // queryObject.city = city;
  // queryObject.sort = sort;
  if (city !== undefined && city !== "") {
    queryObject.city = city;
    let sortBooleanValue = sort === "true";
    queryObject.sort = sortBooleanValue;
    console.log(queryObject);
    if (queryObject.sort === false) {
      const forms = await FormSchema.find(queryObject).sort("-imageDate");
      res.status(200).json({ forms });
      // recently post on this city [click choose city]
    } else {
      const forms = await FormSchema.find(queryObject).sort("imageDate");
      res.status(200).json({ forms });
      // early post on this city [click sort date / choose city]
    }
  } else if (country !== undefined && country !== "") {
    queryObject.country = country;
    let sortBooleanValue = sort === "true";
    queryObject.sort = sortBooleanValue;
    console.log(queryObject);
    if (queryObject.sort === false) {
      const forms = await FormSchema.find(queryObject).sort("-imageDate");
      res.status(200).json({ forms });
      // recently post on this country [click choose country]
    } else {
      const forms = await FormSchema.find(queryObject).sort("imageDate");
      res.status(200).json({ forms });
      // early post on this country [click sort date / choose country]
    }
  } else {
    let sortBooleanValue = sort === "true";
    queryObject.sort = sortBooleanValue;
    console.log(queryObject);
    if (queryObject.sort === false) {
      const forms = await FormSchema.find({}).sort("-imageDate");
      res.status(200).json({ forms });
      // recently post on all forms [click nothing]
    } else {
      const forms = await FormSchema.find({}).sort("imageDate");
      res.status(200).json({ forms });
      // early post on all forms [click sort date]
    }
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
