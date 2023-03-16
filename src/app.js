const express = require("express");
const dotEnv = require("dotenv");
const morgan = require("morgan");
const routes = require("./routes")

//CONFIG ENV VARS
dotEnv.config()

// APP AND APP VARS
 const app = express()
 app.set("PORT", process.env.API_PORT || 8080);


// MIDDLEWARE
app.use(morgan("dev"))
app.use(express.json())

//ROUTES
app.use("/api/v1", routes)

module.exports = app