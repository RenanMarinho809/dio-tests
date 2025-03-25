import { User } from '../entities/User'
import { UserController } from './UserController'
import { getMockUser } from '../__mocks__/mockUser'
import { makeMockRequest } from '../__mocks__/mockRequest'
import { makeMockResponse } from '../__mocks__/mockResponse'

jest.mock('../services/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return {
                createUser: jest.fn()
            }
        })
    }
})

describe('UserController', () => {
    const userController = new UserController()
    const mockUser : User = getMockUser()

    it('Deve retornar status 201 e o usuário criado', async () => {
        const request = makeMockRequest({
            body : {
                name : 'Algum Nome',
                email : 'text@dio.com'
            }
        })
        const response = makeMockResponse();
        await userController.createUser(request, response);
        expect(response.state.status).toBe(201);
    })
})


