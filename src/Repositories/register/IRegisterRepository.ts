/**
 * Interface dos metodos e atributos usados no repository
 */

interface IRegisterRepositoryDTO {}

interface IRegisterRepository {
    list(): Promise<any>;
    findByEmail(_email: any): Promise<any>;
    save(
        name: string,
        surname: string,
        email: string,
        password: string
    ): Promise<any>;
}

export { IRegisterRepository, IRegisterRepositoryDTO };
