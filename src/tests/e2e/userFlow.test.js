const request = require('supertest');
const app = require('../../app');

describe('User End-to-End Test', () => {
  it('should register and login a user', async () => {
    const registerResponse = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Test User', email: 'test@example.com', password: 'password' });
    expect(registerResponse.statusCode).toEqual(201);

    const loginResponse = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password' });
    expect(loginResponse.statusCode).toEqual(200);
    expect(loginResponse.body).toHaveProperty('token');
  });
});
