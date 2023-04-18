require("dotenv").config();
const express = require("express");
const blogsRoutes = require("./routes/blogs");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {

  next();
});

//routes
app.use("/api/blogs", blogsRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
    // listening for requests
    app.listen(process.env.PORT, () => {
      console.log(`server started at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Not connected to DB");
  });
