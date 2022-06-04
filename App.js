const express = require("express");
const app = express();
const port = 5000;
require("dotenv").config();
const formRouter = require("./routes/tasks");
const authRouter = require("./routes/auth");
const connection = require("./db/connects");
const cors = require("cors");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const tryCatchWrapper = require("./middleware/tryCatchWrapper");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.COULD_API_SECRET,
});

//middleware
app.use(express.static("./public"));
app.use(express.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

//routes
app.use("/api/v1", formRouter);
app.use("/api/v1/user", authRouter);

//middleware
app.use(notFound);
app.use(errorHandler);
// connect to DB and the server is starting...
const start = tryCatchWrapper(async () => {
  await connection(process.env.MONGO_STRING);
  app.listen(port, () => {
    console.log(`this app is listening by server on ${port}`);
  });
});

start();
