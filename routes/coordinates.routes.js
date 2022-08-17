import { Router } from 'express';
import controllerCoordinates from '../controllers/coordinatesController.js';
const router = Router();
import { jwtCheck } from '../utils/auth.js';

router.get('/coordinates', jwtCheck, controllerCoordinates.getCoordinates);
router.post('/coordinate', jwtCheck, controllerCoordinates.createCoordinate);
router.post(
  '/coordinates',
  jwtCheck,
  controllerCoordinates.createCoordinates,
);
router.delete(
  '/coordinate',
  jwtCheck,
  controllerCoordinates.deleteCoordinate,
);

export default router;
