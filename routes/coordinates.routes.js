import { Router } from 'express';
import controllerCoordinates from '../controllers/coordinatesController.js';
const router = Router();

router.get('/coordinates', controllerCoordinates.getCoordinates);
router.post('/coordinates', controllerCoordinates.createCoordinate);

export default router;
