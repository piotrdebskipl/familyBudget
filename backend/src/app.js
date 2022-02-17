import 'dotenv/config'
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import baseRouter from "./routes/baseRouter";

const app = express()

app.use(bodyParser.json())
app.use(baseRouter)
app.use((error, req, res, next) => {
  if (res.headerSent) {
      return next(error)
  }

  res.status(error.code || 500)
  res.json({ message: error.message || 'Unknown error' })
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.APP_PORT)
  })
  .catch(e => console.log(e))