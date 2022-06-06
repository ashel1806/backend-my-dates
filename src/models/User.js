/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Debes ingresar un nombre'],
    minlength: [3, 'El nombre debe contener más de 3 caracteres'],
    trim: true,
  },
  lastName: {
    type: String,
    minlength: [3, 'El apellido debe contener más de 3 caracteres'],
    required: false,
    trim: true,
  },
  email: {
    type: String,
    unique: [true, 'Este correo ya ha sido utilizado'],
    required: [true, 'Debes ingresar un correo'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/, 'Debe ingresar un correo válido'],
  },
  password: {
    type: String,
    required: [true, 'Debes ingresar una contraseña'],
    minlength: [8, 'La contraseña debe tener entre 8 y 16 caracteres'],
    maxlength: [16, 'La contraseña no debe tener más de 16 caracteres'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Debes confirmar tu contraseña'],
    validate: {
      validator(el) {
        return el === this.password;
      },
      message: 'Las contraseñas no coinciden',
    },
  },
  country: {
    type: String,
    required: true,
  },
});

schema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  this.passwordConfirm = undefined;

  next();
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
