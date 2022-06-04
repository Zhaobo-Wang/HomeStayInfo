const errorHandlerMiddleware = (err, req, res, next) => {
  //Bad request error
  if (err.name === "CastError") {
    return res.status(400).json({ msg: "No form founded" });
  }
  if(err instanceof Error) {
    return res.status(400).json({msg: err.message});
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
