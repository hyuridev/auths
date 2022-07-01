import { IConfirmationRepository } from "./IConfirmationRepository";
import userModel from "../../entities/User";
/**
 * Repository usado para comunicar com banco de dados -> entities
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class ConfirmationRepository implements IConfirmationRepository {
    async update(code: string, email: string): Promise<any> {
        await userModel.updateOne({ email }, { confirmedEmailAt: new Date() });
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

export { ConfirmationRepository };
