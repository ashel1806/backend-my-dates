import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// config
import config from './config/config';

// routes
import User from './api/routes/user.route';

// middlewares
import logger from './middlewares/logger';
import requestLogger from './middlewares/requestLogger';
import unknownEndpoint from './middlewares/unknownEndpoint';
import errorHandler from './middlewares/errorHandler';

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);

    logger.info('MongoDB connected succesfully');
  } catch (error) {
    logger.error('Some error has ocurred: ', error.message);
  }
};

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);

app.use('/api/v1/auth/register', User);
app.use('/ping', (req, res) => res.send('pong!'));
app.use('/', (req, res) => res.send('Hi!'));

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
