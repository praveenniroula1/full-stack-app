import "dotenv/config"
import express from "express";
import dbConfig from "./SRC/DBConfig/dbConfig.js";
import cors from "cors"
const app = express();


// Middleware
app.use(express.json()); 
app.use(cors())

// dbconfig
dbConfig()

// Routes
import userRouter from "../api/SRC/Routers/userRouter.js"
app.use("/api/v1/user", userRouter); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
