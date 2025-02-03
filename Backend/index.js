import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mailRouter from "./Routes/mailRoute.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.use(express.json());

const allowedOrigins = [
  "https://portfolio-react-frontend-five.vercel.app",
  "https://portfolio-react-backend.vercel.app/mail/send-mail", // Replace with your second URL
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error("Not allowed by CORS")); // Reject the request
    }
  },
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Api working fabulous");
});

app.use("/mail", mailRouter);

app.listen(port, () => {
  console.log(`App is listening at the port ${port}`);
});
