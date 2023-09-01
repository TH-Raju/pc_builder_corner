import { createRouter } from "next-connect";

import dbConnect from "../../../../backend/config/dbConnenct";
import { getCategory } from "../../../../backend/controllers/categoryControllers";

const router = createRouter();

dbConnect();

router.get(getCategory);

export default router.handler();
