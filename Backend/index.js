import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./Routes/mailRoute.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "*", // Allows requests from any URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
  })  
);

// Handle preflight requests explicitly
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Api working fabulous");
});

app.use("/mail", mailRouter);

app.listen(port, () => {
  console.log(`App is listening at the port ${port}`);
});
