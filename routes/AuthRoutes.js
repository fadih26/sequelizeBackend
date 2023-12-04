import express from 'express';
import { signup, login , logout, loggedInUser} from '../controllers/AuthController.js';
import { authenticate } from '../middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/user', authenticate,loggedInUser);

export default router;