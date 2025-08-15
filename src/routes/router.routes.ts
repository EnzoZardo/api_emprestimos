import { listRoutes } from '@/controllers/RoutesController';
import { Router } from 'express';

const router = Router();

router.get('/rotas', listRoutes);

export default router;
