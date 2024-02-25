import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import {notFound, errorHandler} from './middleware/errorHandler.js'; 
dotenv.config();
// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on the ${port}`);
});
