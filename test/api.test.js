// test/api.test.js
const request = require('supertest');
const app = require('../src/index');

describe('POST /api/users', () => {
  it('Deve criar um novo usuário', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John Doe', email: 'john@example.com' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});