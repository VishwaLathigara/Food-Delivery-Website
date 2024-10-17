import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"//1
console.log("File path resolved correctly: ", loginUser, registerUser);//2


const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

export default userRouter;