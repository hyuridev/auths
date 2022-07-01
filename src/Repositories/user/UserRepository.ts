import { IUserRepository } from "./IUserRepository";
import userModel from "../../entities/User";

/**
 * Repository usado para comunicar com banco de dados -> entities
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class UserRepository implements IUserRepository {
    async updatePassword(password: string, email: any): Promise<any> {
        await userModel.updateOne({ email }, { password });
    }

    async findByIds(id: string): Promise<any> {
        const res = await userModel.findById(id);
        return res;
    }

    async findByEmail(_email: any): Promise<any> {
        const user = await userModel.findOne({
            email: _email,
        });
        return user;
    }

    async list(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

export { UserRepository };
