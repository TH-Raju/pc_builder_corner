import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConnenct";
import { getCategories } from "../../../../backend/controllers/categoryControllers";







const router = createRouter();

dbConnect();

router.get(getCategories);

export default router.handler();
