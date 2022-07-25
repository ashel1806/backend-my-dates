import { Schema, model } from 'mongoose';
import { Place } from '../Place';

const schema = new Schema({
  place_info: Place.schema,
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
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
