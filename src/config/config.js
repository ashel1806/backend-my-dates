const dotenv = require('dotenv');

dotenv.config();

let MONGODB_URI = process.env.MONGODB_URI || '';
const PORT = 3001;

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.MONGODB_TEST_URI || '';
}

module.exports = { MONGODB_URI, PORT };
