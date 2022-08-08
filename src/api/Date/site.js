import { Schema, model } from 'mongoose';

const schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
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
  place_id: String,
});

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Date = model('Date', schema);

export default Date;
