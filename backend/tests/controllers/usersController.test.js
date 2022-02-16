import { createUser, getUserById } from "../../src/controllers/usersController"
import {jest} from '@jest/globals'

test('should create user and return its data', async () => {
    const req = { params: { userId: 10, email: 'test@test.com' } }
    const res = { status: jest.fn(() => 200).mockReturnThis(), json: jest.fn() }
    const next = jest.fn()

    await createUser(req, res, next)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({ id: 10, email: 'test@test.com'})
})

test('should get user data', async () => {
    const user = { userId: 10, email: 'test@test.com' }
    const req = { params: { userId: 10 } }
    const res = { status: jest.fn(() => 200).mockReturnThis(), json: jest.fn() }
    const next = jest.fn()

    await getUserById(req, res, next)

    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({ id: 10, email: 'test@test.com'})
})