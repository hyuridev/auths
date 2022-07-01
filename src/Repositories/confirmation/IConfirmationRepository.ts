/**
 * Interface dos metodos e atributos usados no repository
 */

interface IConfirmationRepositoryDTO {}

interface IConfirmationRepository {
    list(): Promise<any>;
    findByEmail(_email: string): Promise<any>;
    update(code: string, email: string): Promise<any>;
}

export { IConfirmationRepository, IConfirmationRepositoryDTO };
