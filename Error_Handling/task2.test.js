const axios = require('axios');
const { makeCustomRequest } = require('./task2');

jest.mock('axios');

describe('makeCustomRequest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should include custom headers and URL parameters in the request', async () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    const params = { userId: 123, type: 'test' };
    const customHeaders = { 'X-API-Key': 'testKey' };
    const mockResponse = { data: { success: true } };

    axios.get.mockResolvedValue(mockResponse);

    const result = await makeCustomRequest(baseUrl, params, customHeaders);

    expect(axios.get).toHaveBeenCalledWith(baseUrl, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'CustomValue',
        'X-API-Key': 'testKey',
      },
    });
    expect(result).toEqual(mockResponse.data);
  });

  it('should handle errors correctly', async () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    const errorMessage = 'Network Error';

    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(makeCustomRequest(baseUrl)).rejects.toThrow(
      `Request failed: ${errorMessage}`
    );
  });
});
