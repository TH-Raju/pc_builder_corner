import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConnenct";
import { postOrder } from "../../../../backend/controllers/OrderControllers";

const router = createRouter();

dbConnect();

router.post(postOrder);

export default router.handler();
