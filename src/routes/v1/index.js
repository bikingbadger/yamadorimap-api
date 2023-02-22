import { Router } from 'express';
const router = Router();

import userRouter from './users.routes.js';
import coordRouter from './coordinates.routes.js'

router.use('/users', userRouter);
router.use('/coordinates', coordRouter)

export default router;
