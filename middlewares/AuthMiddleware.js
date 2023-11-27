import { verifyToken } from '../utils/jwt.js';

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const decoded = verifyToken(token);
    req.userId = decoded.id;
    req.role = decoded.role
    next();
} catch (error) {
    res.status(401).json({ message: error });
}
};

export const checkRole = (roles) => (req, res, next) => {
    if (req.userId && roles.includes(req.role)) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: You do not have the required permissions.' });
    }
};



