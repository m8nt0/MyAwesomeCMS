const request = require('supertest');
const app = require('../../../app');

describe('User Controller Integration Test', () => {
  it('should get user details', async () => {
    const res = await request(app)
      .get('/api/users/1')
      .set('Authorization', `Bearer valid_token`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('email');
  });
});
