import { expressjwt } from 'express-jwt';
import jwks from 'jwks-rsa';


// Auth0 Setup
const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://hiltonmeyer-dev.auth0.com/.well-known/jwks.json', //AUTH0_JWKSURI
  }),
  audience: 'https://yamadoriapi.hiltonmeyer.com', //AUTH0_AUDIENCE
  issuer: 'https://hiltonmeyer-dev.auth0.com/', //AUTH0_ISSUER
  algorithms: ['RS256'],
});

// const validToken = async (req, res, next) => {
//   //get token from request header
//   const authHeader = req.headers['authorization'];
// //   console.log(authHeader);
//   if (!authHeader)
//     res.status(403).json({
//       status: 'error',
//       message: 'User not authorized, make sure Header contains token',
//     });
//   const token = authHeader.split(' ')[1];
//   console.log(token);
//   next();
// };

export { jwtCheck };
