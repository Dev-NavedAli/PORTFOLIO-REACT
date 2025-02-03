import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./Routes/mailRoute.js";

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS Configuration
app.use(
    cors({
        origin: "*", // Allows requests from any URL
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Include OPTIONS for preflight requests
        allowedHeaders: ["Content-Type", "Authorization"], // Ensure proper headers are allowed
    })
);

// Handle OPTIONS requests for preflight
app.options("*", cors());

// Routes
app.get("/", (req, res) => {
    res.send("Api working fabulous");
});

app.use("/mail", mailRouter);

// Start server
app.listen(port, () => {
    console.log(`App is listening at the port ${port}`);
});