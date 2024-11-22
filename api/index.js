import express from "express";
import dotenv from "dotenv";
import dbConnect from "../Config/database.js";
import router from "../routes/practicalRoutes.js";

const app = express();

const PORT = 4000 || process.env.PORT;

app.use(express.json());

//mounting api routes
app.use("/api/v1",router)

app.get("/",(req,res)=>
  {res.send("Successful");})

dotenv.config();

dbConnect();



app.listen(PORT, () => {
  console.log("Server is running at port:", PORT);
});