import Router from "express";

const router = Router()

router.use("/user", userRouter)
router.use("website", websiteRouter)

export default router
