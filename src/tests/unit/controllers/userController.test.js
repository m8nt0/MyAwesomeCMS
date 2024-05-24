const userController = require('../../../controllers/userController');
const userService = require('../../../services/userService');

jest.mock('../../../services/userService');

describe('User Controller Unit Test', () => {
  it('should return user details', async () => {
    const req = { params: { id: '1' } };
    const res = { json: jest.fn() };
    const next = jest.fn();

    userService.getUserById.mockResolvedValue({ id: '1', email: 'test@example.com' });

    await userController.getUser(req, res, next);

    expect(res.json).toHaveBeenCalledWith({ id: '1', email: 'test@example.com' });
  });
});
