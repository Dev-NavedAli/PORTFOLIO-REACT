import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mailRouter from "./Routes/mailRoute.js"


dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true }));
const port = 3000


app.use(express.json())
app.use(
    cors({
        origin: "https://portfolio-react-frontend-five.vercel.app",
        methods: "POST",
        allowedHeaders: ["Content-Type"],
    })
);

app.get("/",(req,res)=>{
    res.send("Api working fabulous")
})

app.use("/mail",mailRouter)


app.listen(port,()=>{
    console.log(`App is listening at the port ${port}`);
    
})