import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConnenct";
import { registerUser } from "../../../../backend/controllers/authControllers";

const router = createRouter();

dbConnect();

router.post(registerUser);

export default router.handler();
