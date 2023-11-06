import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectToDB from './config/db.js';
import errorHandler from './middlewares/errrorMiddleware.js';
import 'colors';
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import postRouter from './routes/postRoutes.js'
dotenv.config()

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({
  limit: '30mb',
  extended: true
}))

app.use(express.static('public'))

const PORT = process.env.PORT || 8000

// Connecting to DB
connectToDB(() => {
  app.listen(PORT, () => {
    console.log(`Listening to Port ${process.env.PORT}`);
  });
});

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);


// Error middleware
app.use(errorHandler);