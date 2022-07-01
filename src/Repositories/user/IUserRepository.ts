/**
 * Interface dos metodos e atributos usados no repository
 */

interface IUserRepositoryDTO {}

interface IUserRepository {
    list(): Promise<any>;
    findByIds(id: string): Promise<any>;
    findByEmail(_email: string): Promise<any>;
    updatePassword(password: string, email: any): Promise<any>;
}

export { IUserRepository, IUserRepositoryDTO };
