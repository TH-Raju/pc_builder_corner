import { createRouter } from "next-connect";

import dbConnect from "../../../../backend/config/dbConnenct";
import { getCategoryProductDetails } from "../../../../backend/controllers/categoryControllers";

const router = createRouter();

dbConnect();

router.get(getCategoryProductDetails);

export default router.handler();
