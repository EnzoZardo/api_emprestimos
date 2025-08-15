import { Router } from 'express';
import { listCredits } from '@/controllers/LoanController';
import { customerCreateValidation } from '@/middleware/validatiors';
import validate from '@/middleware/validationsErrorHandler';

const router = Router();

router.post('/creditos', customerCreateValidation, validate, listCredits);

export default router;
