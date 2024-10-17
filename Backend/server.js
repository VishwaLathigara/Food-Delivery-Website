import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import 'dotenv/config'



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://vishwalathigara:vpl642@cluster0.exskk9r.mongodb.net/?
//mongodb+srv://vishwalathigara:<password>@cluster1.b2fyevk.mongodb.net/?
//mongodb+srv://vishwalathigara:<password>@cluster0.mjr9sci.mongodb.net/?
//mongodb+srv://blueemoon100:bluemoon@cluster0.xqhftd8.mongodb.net/?
