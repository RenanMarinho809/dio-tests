import { User } from '../entities/User';
import { getMockUser} from '../__mocks__/mockUser'
import {  makeMockResponse } from '../__mocks__/mockResponse';
import { makeMockRequest } from '../__mocks__/mockRequest';
import { UserController } from '../controllers/UserController';

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

    const userController = new UserController();
    const mockUser: User = getMockUser();
  
    it('Deve retornar status 201 e o usuario criado', async () => {
  
      const request = makeMockRequest({ body: { name: 'Renato', email: 'Renato@dio.com' } });
      const response = makeMockResponse();
  
      await userController.createUser(request, response);
  
      expect(response.state.status).toBe(201);
  
    });
  
  });

