import { Router } from "express";
import { listCredits } from "../controllers/LoanController.js";

const router = Router();

router.post("/creditos", listCredits);

export default router;
