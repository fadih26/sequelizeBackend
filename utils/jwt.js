import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const secret = `${process.env.JWT_SECRET}`; // Use a strong, environment-specific secret in production

export const generateToken = (user) => {
  return jwt.sign({ id: user.id,role:'admin' }, secret, { expiresIn: '24h' }); // Token valid for 24 hours
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};