import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';
import recipeRouter from './routes/recipe.js';
import cors from 'cors'

const app = express(); 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// app.use(bodyParser.json())

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)

mongoose
  .connect(
    "mongodb+srv://rishavghosh5023:U8tBVUBVZkgpuH0P@cluster0.dwiyiuj.mongodb.net/",
    {
      dbName: "MERN_Recipe_YouTube",
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));


// username=rishavghosh5023;
// password=U8tBVUBVZkgpuH0P;