import * as imageModel from '../models/Image.js';

const uploadImage = async (req, res) => {
  console.log('upload Image controller');

  // Set the image to upload
  const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

  const publicId = await imageModel.uploadImage(imagePath);
  console.log(publicId);

  return { result: 'OK', publicId: publicId };
};

export { uploadImage };
