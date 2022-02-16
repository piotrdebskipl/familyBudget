import express from "express";
import baseRouter from "./routes/baseRouter";

const app = express()
const port = 8086

app.use(baseRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})