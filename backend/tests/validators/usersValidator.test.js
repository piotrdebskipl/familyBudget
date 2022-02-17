import { expect } from "@jest/globals"
import { validateEmail, validatePassword, validateUserId } from "../../src/validators/usersValidator"

describe('validateUserId', () => {
    test('shoud throw Error when req.params are empty', () => {
        const req = { params: {} }
    
        expect(() => { validateUserId(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud throw Error when req.params.userId is a number', () => {
        const req = { params: { userId: 234234 } }
    
        expect(() => { validateUserId(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud NOT throw Error when req.params.userId is number', () => {
        const req = { params: { userId: 'jp98n8ny0892n290' } }
    
        expect(() => { validateUserId(req) }).not.toThrow()
    })
})

describe('validateEmail', () => {
    test('shoud throw Error when req.body are empty', () => {
        const req = { body: {} }
    
        expect(() => { validateEmail(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud throw Error when req.body.email is not valid', () => {
        const req = { body: { email: 'sdfs' } }
    
        expect(() => { validateEmail(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud NOT throw Error when req.body.email is valid', () => {
        const req = { body: { email: 'test@test.com' } }
    
        expect(() => { validateEmail(req) }).not.toThrow()
    })
})

describe('validatePassword', () => {
    test('shoud throw Error when req.body are empty', () => {
        const req = { body: {} }
    
        expect(() => { validatePassword(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud throw Error when req.body.password is not valid', () => {
        const req = { body: { password: 'sdfs' } }
    
        expect(() => { validatePassword(req) }).toThrowError('Invalid parameter')
    })
    
    test('shoud NOT throw Error when req.body.password is valid', () => {
        const req = { body: { password: 'kuyI(*YB87o' } }
    
        expect(() => { validatePassword(req) }).not.toThrow()
    })
})
