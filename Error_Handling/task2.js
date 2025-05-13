const axios = require('axios');

const makeCustomRequest = async (baseUrl, params = {}, customHeaders = {}) => {
  try {
    const response = await axios.get(baseUrl, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'CustomValue',
        ...customHeaders,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
};

module.exports = { makeCustomRequest };
