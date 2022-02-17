import { createUser, getUserById } from "../../src/controllers/usersController"
import {jest} from '@jest/globals'
import User from "../../src/models/user"

test('should create user and return its data', async () => {
    const req = { body: { email: 'test@test.com', password: 'sdfsdert344' } }
    const res = { status: jest.fn(() => 200).mockReturnThis(), json: jest.fn() }
    const next = jest.fn()
    jest.spyOn(User, 'create').mockResolvedValueOnce({ id: '0jdfg8ny098y', email: 'test@test.com' })

    await createUser(req, res, next)

    expect(User.create).toBeCalledWith({ email: 'test@test.com', password: 'sdfsdert344' })
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({ id: '0jdfg8ny098y', email: 'test@test.com'})
})

test('should get user data', async () => {
    const req = { params: { userId: '0inw983hjop9spoweo' } }
    const res = { status: jest.fn(() => 200).mockReturnThis(), json: jest.fn() }
    const next = jest.fn()
    jest.spyOn(User, 'findById').mockResolvedValueOnce({ id: '0inw983hjop9spoweo', email: 'test@test.com' })

    await getUserById(req, res, next)

    expect(User.findById).toBeCalledWith('0inw983hjop9spoweo')
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({ id: '0inw983hjop9spoweo', email: 'test@test.com'})
})