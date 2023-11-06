import express from 'express';
import upload from '../middlewares/multerMiddleware.js';
import { userRegistration, userLogin } from '../controllers/userController.js'

const router = express.Router();

router.post('/register', upload.single('picture'), userRegistration)
router.post('/login', userLogin)

export default router