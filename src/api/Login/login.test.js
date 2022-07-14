import mongoose from 'mongoose';
import supertest from 'supertest';

import app from '../../app';
import User from '../User/user';

const api = supertest(app);

beforeAll((done) => {
  done();
});

describe('POST /api/v1/auth/login', () => {
  beforeEach(async () => {
    await User.deleteMany({});

    const user = new User({
      name: 'Jhon',
      lastName: 'Doe',
      email: 'jhon.doe@gmail.com',
      country: 'Chile',
      password: 'aleman234',
      passwordConfirm: 'aleman234',
    });

    await user.save();
  });

  test('Should return 200 status code', async () => {
    const userToLogging = {
      email: 'jhon.doe@gmail.com',
      password: 'aleman234',
    };

    await api
      .post('/api/v1/auth/login')
      .send(userToLogging)
      .expect(200)
      .expect('Content-Type', /json/);
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});
