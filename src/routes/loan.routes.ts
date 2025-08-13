import { Router } from 'express';
import { listCredits } from '@/controllers/LoanController';
import { customerValidation } from '@/middleware/validations';
import validate from '@/middleware/validationErrorHandler';

const router = Router();

router.post('/creditos', customerValidation, validate, listCredits);

export default router;
