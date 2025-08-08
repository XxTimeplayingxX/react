import type { UserRepository } from "../domain/repository/userRepository";
import type { User } from "../user";

const URL = 'https://jsonplaceholder.typicode.com/users';

export class UserRepositoryImpClass implements UserRepository{
    async getAll():Promise<User[]>{
        const response = await fetch(URL);

        if(!response.ok){
            throw new Error('Error al cargar usuarios')
        }
        return await response.json;
    }
}
