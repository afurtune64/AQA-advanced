const fetchWrongUrl = require('./task1');
const { test, expect } = require('@jest/globals');

test('fetchWrongUrl should handle 404 error correctly', async () => {
  const result = await fetchWrongUrl();
  expect(result).toBe('Error 404: Not Found');
});
