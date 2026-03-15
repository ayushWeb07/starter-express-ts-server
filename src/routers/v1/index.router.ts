import { Router } from "express"
import userRouter from "./users.router.ts"

const router= Router()

router.use("/users", userRouter)

export default router