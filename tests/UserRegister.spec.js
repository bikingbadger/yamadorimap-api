import request from 'supertest';
import { app } from '../src/app.js';
import User from '../src/models/User.js';

import { dbConnection } from '../src/utils/db.js';

const testUser = {
  username: 'user1',
  email: 'user@test.com',
  password: 'pass123',
};

// Cleans up database between each test
afterEach(async () => {
  await User.deleteMany()
})

afterAll(async () => {
  // Close DB Connection
  await dbConnection.close();
})

describe('user', () => {
  it('returns 200 OK when register is successful', async () => {
    const response = await request(app).post('/api/v1/users/register').send(testUser);

    expect(response.status).toBe(200);
  });

  it('returns success message when user registers', async () => {
    const response = await request(app).post('/api/v1/users/register').send(testUser);

    expect(response.body.message).toBe('User created');
  });

  it('is saved to DB', async () => {
    await request(app).post('/api/v1/users/register').send(testUser);

    const Users = await User.find();
    console.log(Users);

    expect(Users.length).toBe(1);
    expect(Users.username===testUser.username).toBeTruthy;
    expect(Users.email===testUser.email).toBeTruthy;
  });

  it('does not duplicate users', async () => {
    await request(app).post('/api/v1/users/register').send(testUser);

    const Users = await User.find();
    console.log(Users);

    expect(Users.length).toBe(1);
    expect(Users.username===testUser.username).toBeTruthy;
    expect(Users.email===testUser.email).toBeTruthy;

    const response = await request(app).post('/api/v1/users/register').send(testUser);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('User exists');
  });
});
