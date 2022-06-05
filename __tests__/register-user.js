import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app';

const api = supertest(app);

beforeAll((done) => {
  done();
});

describe('Sanity test', () => {
  test('Endpoint /ping should return "pong!"', async () => {
    const response = await api
      .get('/ping');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('pong!');
  });
});

describe('POST /api/v1/auth/register', () => {
  test('Should return 201 status code', async () => {
    const user = {
      name: 'Jhon',
      lastName: 'Doe',
      email: 'jhon.doe@gmail.com',
      country: 'Chile',
    };

    await api
      .post('/api/v1/auth/register')
      .send(user)
      .expect(201)
      .expect('Content-Type', /json/);
  });
});

afterAll((done) => {
  mongoose.connection.close();
  done();
});