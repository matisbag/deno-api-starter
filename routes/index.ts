import { Router } from '@/deps.ts';
import dinosaurRoutes from '@/routes/dinosaurRoutes.ts';

const router = new Router();

router.use(dinosaurRoutes.routes());

export default router;
