import getEntityManagerMock from '../__mocks__/getEntityManagerMock';
import { User } from '../entities/User';
import { UserRepository } from './UserRepository';
import { v4 as uuid } from 'uuid';

describe('userRepository', () => {
    const mockUser: User ={
        user_id: uuid(),
        name: 'Algum nome',
        email: 'email@dio.com'
    }


    it('Deve retornar um usuário salvo assim que chamar a função save', async () => {
          
    const managerMock = await getEntityManagerMock({
        saveReturn: mockUser
    })

    const userRepository = new UserRepository(managerMock);

    const user = await userRepository.save(mockUser)
    expect(user).toHaveProperty('user_id')
    expect(user).toMatchObject({
        name: 'Algum nome',
        email: 'email@dio.com'
    })
    })
})