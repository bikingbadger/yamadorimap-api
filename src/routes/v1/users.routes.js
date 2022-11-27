import { Router } from 'express';
import User from '../../models/User.js';

const userRouter = Router();

/**
 * POST: Register
 *
 * Creates a new app users based on email and password
 * Email must be unique in the system
 *
 * Parameters
 * name: String
 * email: String
 * password: String
 */
userRouter.post('/register', async (req, res) => {
  console.log('/api/v1/user/register');
  // TODO: Validate data
  //   const error = await registerValidation(req.body);
  //   if (error) return res.status(error.status).json(error);

  // Create user object
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password, //await hashValue(req.body.password),
  });

  // Check user doesn't exist in DB
  const exists = await User.findOne({ email: req.body.email });
  if (exists) return res.status(400).json({ error: true, message: 'User exists' });

  // Save the user
  try {
    const savedUser = await user.save();
    res.status(200).json({ error: false, message: 'User created', user: savedUser });
  } catch (error) {
    res.status(400).send(error);
  }
});

export default userRouter;
