import { createRouter } from "next-connect";

import dbConnect from "../../../../backend/config/dbConnenct";
import { getProduct } from "../../../../backend/controllers/productsControllers";

const router = createRouter();

dbConnect();

router.get(getProduct);

export default router.handler();
