import supertest from 'supertest';
import app from '../src/app';
import User from '../src/models/User';

const api = supertest(app);

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
