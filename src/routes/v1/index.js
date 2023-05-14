import { Router } from 'express';
const router = Router();

import userRouter from './users.routes.js';
import coordRouter from './coordinates.routes.js';
import imageRouter from './images.routes.js';

router.use('/users', userRouter);
router.use('/coordinates', coordRouter);
router.use('/images', imageRouter);

export default router;
