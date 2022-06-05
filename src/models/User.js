import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Este campo es obligatorio'],
    minlength: [3, 'El nombre debe contener más de 3 caracteres'],
    trim: true,
  },
  lastName: {
    type: String,
    minlength: [4, 'El apellido debe contener más de 4 caracteres'],
    required: false,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Este campo es obligatorio'],
    trim: true,
    match: ['/.+\\@.+\\.+/', 'Debe ingresar un correo válido'],
  },
  country: {
    type: String,
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

const User = mongoose.model('User', schema);

export default User;
