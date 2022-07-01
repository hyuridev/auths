/**
 * Interface dos metodos e atributos usados no repository
 */

interface IOauthRepositoryDTO {}

interface IOauthRepository {
    list(): Promise<any>;
    findByEmail(email: string): Promise<any>;
    saveToken(refreshToken: any, token: any, userId: any): Promise<any>;
    usersTokenRepository(userId: any, token: any): Promise<any>;
    deleteByid(userId: string): Promise<any>;
}

export { IOauthRepository, IOauthRepositoryDTO };
