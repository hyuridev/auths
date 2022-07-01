import { IRegisterRepository } from "./IRegisterRepository";
import userModel from "../../entities/User";
/**
 * Repository usado para comunicar com banco de dados -> entities
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class RegisterRepository implements IRegisterRepository {
    async save(
        _name: string,
        _surname: string,
        _email: string,
        _password: string
    ): Promise<any> {
        // eslint-disable-next-line new-cap
        const user = await new userModel({
            name: _name,
            surname: _surname,
            email: _email,
            password: _password,
        }).save();

        return user;
    }

    async findByEmail(_email: any): Promise<any> {
        const res = await userModel.findOne({ email: _email });
        return res;
    }

    async list(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

// const user = await userModel.findOne({ email: emailToCheck })
export { RegisterRepository };
