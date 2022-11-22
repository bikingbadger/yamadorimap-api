import { Router } from 'express';
import usersController from '../../controllers/usersController.js';

const router = Router();

router.post('users',usersController.createUser);
