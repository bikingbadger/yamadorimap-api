import { Router } from 'express';
const router = Router();

import userRouter from './users.routes.js';

router.use('/users', userRouter);

export default router;
