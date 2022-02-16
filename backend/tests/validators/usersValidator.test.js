import { expect } from "@jest/globals"
import { validateEmail, validateUserId } from "../../src/validators/usersValidator"

describe('validateUserId', () => {
    test('shoud throw Error when req.params are empty', () => {
        const req = { params: {} }
    
        expect(() => { validateUserId(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud throw Error when req.params.userId is not a number', () => {
        const req = { params: { userId: 'sdfs' } }
    
        expect(() => { validateUserId(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud NOT throw Error when req.params.userId is number', () => {
        const req = { params: { userId: 123 } }
    
        expect(() => { validateUserId(req) }).not.toThrow()
    })
})

describe('validateEmail', () => {
    test('shoud throw Error when req.params are empty', () => {
        const req = { params: {} }
    
        expect(() => { validateEmail(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud throw Error when req.params.email is not valid', () => {
        const req = { params: { email: 'sdfs' } }
    
        expect(() => { validateEmail(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud NOT throw Error when req.params.email is valid', () => {
        const req = { params: { email: 'test@test.com' } }
    
        expect(() => { validateEmail(req) }).not.toThrow()
    })
})

