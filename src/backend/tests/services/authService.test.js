const authService = require('../../services/authService');

describe('Auth Service', () => {
  it('should return a token for valid login', async () => {
    const token = await authService.login({ email: 'test@example.com', password: 'password' });
    expect(token).toBeDefined();
  });
});
