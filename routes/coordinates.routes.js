import { Router } from 'express';
import controllerCoordinates from '../controllers/coordinatesController.js';
const router = Router();

router.get('/coordinates', controllerCoordinates.getCoordinates);
router.post('/coordinate', controllerCoordinates.createCoordinate);
router.post('/coordinates', controllerCoordinates.createCoordinates);

router.delete('/coordinate', controllerCoordinates.deleteCoordinate);

export default router;
