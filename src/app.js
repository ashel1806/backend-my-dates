import express from 'express';
import mongoose from 'mongoose';

import config from './config/config.js';

import User from './api/routes/user.route.js';

const app = express();

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected succesfully');
  })
  .catch((error) => {
    console.log('Some error has ocurred: ', error.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/auth/register', User);
app.use('/ping', (req, res) => res.send('pong!'));

export default app;
