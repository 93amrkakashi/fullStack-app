const express = require('express');
require("dotenv").config()

// express app
const app = express()


// listening for requests
app.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`)
})