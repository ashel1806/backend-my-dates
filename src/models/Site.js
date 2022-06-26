import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: String,
    enum: ['familia', 'pareja', 'amigos'],
    required: [true, 'Elija una categoría por favor'],
  },
  budget: [
    {
      description: {
        type: String,
        required: [true, 'Debes agregar una descripción'],
        trim: true,
      },
      balance: {
        type: Number,
        required: [true, 'Debes agregar un monto'],
      },
    },
  ],
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  rate: Number,
  description: String,
  banner: String,
  images: [String],
  is_favorite: Boolean,
});

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Site = mongoose.model('Site', schema);

export default Site;
