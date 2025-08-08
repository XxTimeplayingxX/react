import type { UserRepository } from "../../../domain/repository/userRepository";
import type { User } from "../../../user";

export const getUsers = (repo: UserRepository): Promise<User[]> =>{
    return repo.getAll();
}