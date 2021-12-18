const supertest = require('supertest');
const app = require('../app');

const request = supertest(app.callback());

describe('GET /candidates', () => {
  test('responds correctly', async () => {
    const response = await request.get('/candidates');
    expect(response.status).toBe(200);
  });
});
