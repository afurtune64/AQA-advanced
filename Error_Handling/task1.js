const axios = require('axios');

async function fetchWrongUrl() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/invalid-endpoint'
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Error ${error.response.status}: ${error.response.statusText}`;
    } else {
      return 'Unknown error occurred';
    }
  }
}

module.exports = fetchWrongUrl;
