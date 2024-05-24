const userRepository = require('../../repositories/userRepository');

describe('User Repository', () => {
  it('should find a user by email', async () => {
    const email = 'test@example.com';
    const user = await userRepository.findUserByEmail(email);
    expect(user.email).toBe(email);
  });
});
