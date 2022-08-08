import { Schema, model } from 'mongoose';

const schema = new Schema({
  place_id: String,
  name: String,
  latitude: Number,
  phone_number: String,
  longitude: Number,
  reviews: [
    {
      author_name: String,
      profile_photo_url: String,
      rating: Number,
      relative_time_description: String,
      text: String,
    },
  ],
  photos: [
    {
      height: Number,
      width: Number,
      reference: String,
    },
  ],
  rating: Number,
  url_google_maps: String,
  website: String,
  address: String,
});

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Favorites = model('Favs', schema);

export default Favorites;
