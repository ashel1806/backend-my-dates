const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  num_reviews: Number,
  location: String,
  images: {
    small: {
      width: Number,
      url: String,
      height: Number,
    },
    thumbnail: {
      width: Number,
      url: String,
      height: Number,
    },
    medium: {
      width: Number,
      url: String,
      height: Number,
    },
    large: {
      width: Number,
      url: String,
      height: Number,
    },
    original: {
      width: Number,
      url: String,
      height: Number,
    },
  },
  rating: Number,
  description: String,
  url: String,
  website: String,
  email: String,
  address: String,
});

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Place = mongoose.model('Place', schema);

export default Place;
