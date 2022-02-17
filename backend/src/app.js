import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import baseRouter from "./routes/baseRouter";

const app = express()
const port = 8086

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
  .connect('mongodb://host.docker.internal:27017/familyBudget')
  .then(() => {
    app.listen(port)
  })
  .catch(e => console.log(e))