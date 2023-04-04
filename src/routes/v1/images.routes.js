// Add logging
import { logger } from '../../utils/logger.js';

// Setup router
import { Router } from 'express';
import * as imageController from '../../controllers/image.controller.js';

// Add file handler
import * as fileHandler from '../../utils/files.js';
import fs from 'fs';

const imageRouter = Router();

imageRouter.post('/upload', fileHandler.upload.single('image'), async (req, res) => {
  logger.info('POST: /api/v1/image/upload');
  logger.info(`File ${req.file}`);

  // Upload the file to storage
  const result = await imageController.uploadImage(req.file.path);

  // Delete the file like normal
  fs.access(req.file.path, fs.F_OK, async (err) => {
    if (err) {
      logger.trace(err);
      return;
    }

    //file exists
    logger.trace(`${req.file.path} exists, will be removed`);
    await fs.unlink(req.file.path, (err) => {
      if (err) throw err;
      logger.trace(`${req.file.path} was deleted`);
    });
  });

  // Return result
  res.status(200).json({ error: false, message: 'Image uploaded', result: result });
});

export default imageRouter;
