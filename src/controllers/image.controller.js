// Add logging
import { logger } from '../utils/logger.js';

import * as imageModel from '../models/Image.js';

const uploadImage = async (imagePath) => {
  logger.info('upload Image controller:' + imagePath);

  // Set the image to upload
  //const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

  const publicId = await imageModel.uploadImage(imagePath);
  logger.info(publicId);

  return { result: 'OK', publicId: publicId };
};

export { uploadImage };
