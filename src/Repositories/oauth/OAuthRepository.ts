import { IOauthRepository } from "./IOauthRepository";
import userModel from "../../entities/User";
import tokenModel from "../../entities/Token";
/**
 * Repository usado para comunicar com banco de dados -> entities
 * Para cada acão independente existe uma repositorio exemplo: usuario, perfil, noticias...
 */

class OauthRepository implements IOauthRepository {
    async deleteByid(userId: string): Promise<any> {
        const res = await tokenModel.deleteOne({
            user: userId,
        });

        return res;
    }

    async usersTokenRepository(userId: string, token: string): Promise<any> {
        const res = await tokenModel.find({
            refreshToken: token,
            user: userId,
        });
        return res;
    }

    async saveToken(refreshToken: any, token: any, userId: any): Promise<any> {
        // eslint-disable-next-line new-cap
        const res = await new tokenModel({
            refreshToken,
            token,
            user: userId,
        }).save();
        return res;
    }

    async findByEmail(email: string): Promise<any> {
        const res = await userModel.findOne({ email });
        return res;
    }

    list(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

export { OauthRepository };
