const axios = require('axios');
const { userService } = require('./task3');

jest.mock('axios');

describe('UserService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    it('should fetch user successfully', async () => {
      const userId = '123';
      const mockUser = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
      };

      axios.get.mockResolvedValue({
        data: mockUser,
      });

      const result = await userService.getUser(userId);

      expect(axios.get).toHaveBeenCalledWith(`/api/users/${userId}`);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockUser);
    });

    it('should handle error when fetching user fails', async () => {
      const userId = '123';
      const errorMessage = 'User not found';

      axios.get.mockRejectedValue({
        response: {
          data: { message: errorMessage },
        },
      });

      await expect(userService.getUser(userId)).rejects.toThrow(errorMessage);
      expect(axios.get).toHaveBeenCalledWith(`/api/users/${userId}`);
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });
});
