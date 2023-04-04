import { Router } from 'express';
import * as imageController from '../../controllers/image.controller.js';

const imageRouter = Router();

imageRouter.post('/upload', async (req, res) => {
  console.log('POST: /api/v1/image/upload');
  const result = await imageController.uploadImage(req, res);
  res.status(200).json({ error: false, message: 'Image uploaded', result: result });
});

export default imageRouter;
