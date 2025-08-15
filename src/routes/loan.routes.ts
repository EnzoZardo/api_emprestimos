import { Router } from 'express';
import { listCredits } from '@/controllers/LoanController';
import { customerValidation } from '@/middleware/validatiors';
import validate from '@/middleware/validationsErrorHandler';

const router = Router();

router.post('/creditos', customerValidation, validate, listCredits);

export default router;
