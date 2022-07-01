import { IRegisterRepository } from "../../src/Repositories/register/IRegisterRepository";
import { GetRegisterUseCase } from "../../src/useCases/register/getRegister/GetRegisterUseCase";

describe("Testando <Register>", (): void => {
    const MocklistUsers = [
        {
            name: "joao",
            surname: "Kosciuszko",
            email: "joao99vkg@gmail.com",
            password:
                "$2a$10$mb6kCRctLRQSIWlNOAbCSukHGXZqU8jlnSdggXQCzpksyWlSNifCa",
        },
        {
            name: "Lucas Firmino",
            surname: "Barroso",
            email: "lucas.firmino@constructin.com.br",
            password:
                "$2a$10$zxBTY2sYzmNOe0QY2gjTB.YE13Sr.NpG5qEQrcyieH77twsubu4XO",
        },
    ];

    class RegisterRepository implements IRegisterRepository {
        async list(): Promise<any> {
            throw new Error("Method not implemented.");
        }

        async findByEmail(_email: any): Promise<any> {
            const res = await MocklistUsers.find(function (users) {
                return users.email === _email;
            });

            return res;
        }

        async save(
            name: string,
            surname: string,
            email: string,
            password: string
        ): Promise<any> {
            throw new Error("Method not implemented.");
        }
    }

    it("Verify email not register", async () => {
        const registerRepository = await new RegisterRepository();
        const getRegisterUseCase = await new GetRegisterUseCase(
            registerRepository
        );

        const email = "lucas.firmino2@constructin.com.br";
        const res = await getRegisterUseCase.execute({ email });
        expect(res).toBe(true);
    });
});
