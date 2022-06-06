import express from 'express';
import mongoose from 'mongoose';

import config from './config/config';
import logger from './middlewares/logger';

import User from './api/routes/user.route';
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);

app.use('/api/v1/auth/register', User);
app.use('/ping', (req, res) => res.send('pong!'));

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;
