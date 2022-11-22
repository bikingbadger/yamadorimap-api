import request from 'supertest';
import { app } from '../src/app.js';

it('returns 200 OK when signup is successful', async () => {
  const response = await request(app).post('/api/v1/users').send({
    username: 'user1',
    email: 'user@test.com',
    password: 'pass123',
  });

  expect(response.status).toBe(200);
});

it('returns success message', async () => {
  const response = await request(app).post('/api/v1/users').send({
    username: 'user1',
    email: 'user@test.com',
    password: 'pass123',
  });

  expect(response.body.message).toBe('User created');
});
