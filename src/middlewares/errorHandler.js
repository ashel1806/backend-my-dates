/* eslint-disable no-else-return */
import logger from './logger';

// eslint-disable-next-line consistent-return
const errorHandler = (error, req, res, next) => {
  if (error.message === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  } else if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' });
  }

  logger.error(error.message);

  next(error);
};

export default errorHandler;
