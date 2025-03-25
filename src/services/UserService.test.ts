import { getMockUser, } from '../__mocks__/mockUser';
import { UserService } from './UserService';
import { User } from '../entities/User';

jest.mock('../repositories/UserRepository')
const mockUserRepository = require('../repositories/UserRepository')

describe('UserService', () => {
  const mockUser : User = getMockUser()

  const userService = new UserService({
    userRepository: mockUserRepository,
    name: "Algum nome",
    email: "text@dio.com"
  })

  it('Deve retornar um usuario, quando for salvo', async () => {
    mockUserRepository.save = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
    const user = await userService.createUser()
    expect(user).toHaveProperty('user_id')
    expect(user).toMatchObject({
      name: "Algum nome",
      email: "text@dio.com",
    });
  })

})