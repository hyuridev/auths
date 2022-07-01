import { IRecoveryRepository } from "./IRecoveryRepository";
import userModel from "../../entities/User";
/**
 * Repository usado para comunicar com banco de dados -> entities
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class RecoveryRepository implements IRecoveryRepository {
    list(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async findByEmail(_email: any): Promise<any> {
        const user = await userModel.findOne({
            email: _email,
        });
        return user;
    }

    async update(password: string, email: string): Promise<any> {
        await userModel.updateOne({ email }, { password });
    }

    async saveNewTokenPassword(token: string, _email: any): Promise<any> {
        await userModel.updateOne(
            { _email },
            { newTokenEmailNewPassword: token }
        );
    }
}

export { RecoveryRepository };
