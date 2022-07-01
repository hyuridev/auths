/**
 * Interface dos metodos e atributos usados no repository
 */

interface IRecoveryRepositoryDTO {}

interface IRecoveryRepository {
    list(): Promise<any>;
    findByEmail(_email: string): Promise<any>;
    update(password: string, email: string): Promise<any>;
    saveNewTokenPassword(token: string, _email: any): Promise<any>;
}

export { IRecoveryRepository, IRecoveryRepositoryDTO };
