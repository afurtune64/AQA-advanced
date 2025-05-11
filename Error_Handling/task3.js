const axios = require('axios');

const userService = {
  getUser: async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch user');
    }
  },
};

module.exports = { userService };
