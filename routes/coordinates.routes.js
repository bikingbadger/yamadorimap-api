import { Router } from 'express';
import controllerCoordinates from '../controllers/coordinatesController.js';
const router = Router();

router.get('/coordinates', controllerCoordinates.getCoordinates);

export default router;
