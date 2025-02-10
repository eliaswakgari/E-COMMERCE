const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const connectDB = require("./config/Config");
const productRouter = require("./routes/productRoute");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5001;
connectDB();
//middleware
app.use(cors());
app.use(express.json());
//serving static files
app.use("/image", express.static("upload/images"));
//image storage Engine
const storage = multer.diskStorage({
  destination: "upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });
//Api creation
//add product api
app.use("/", productRouter);
//api for upload file
app.post("/upload", upload.single("product"), (req, res) => {
  try {
    return res
      .status(200)
      .json({ success: true, filename: `${req.file.filename}` });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ succuss: false, message: "Interval Server Error" });
  }
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
