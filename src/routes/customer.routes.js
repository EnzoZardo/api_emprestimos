import { Router } from "express";
import { listCustomers } from "../controllers/CustomerController.js";

const router = Router();

router.get("/clientes", listCustomers);

export default router;
