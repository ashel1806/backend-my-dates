import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import config from './config/config';

import User from './api/routes/user.route';

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);

    console.log('MongoDB connected succesfully');
  } catch (error) {
    console.log('Some error has ocurred: ', error.message);
  }
};

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :response-time ms - :body', {
  // eslint-disable-next-line no-unused-vars
  skip: (req, res) => process.env.NODE_ENV === 'test',
}));

app.use('/api/v1/auth/register', User);
app.use('/ping', (req, res) => res.send('pong!'));

export default app;
