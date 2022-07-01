import SES from "aws-sdk/clients/ses";

class SendEmailService {
    private client: SES;

    constructor() {
        this.client = new SES({
            region: "us-east-1",
        });
    }

    async run(): Promise<void> {
        await this.client
            .sendEmail({
                Source: "Hyuri Miranda Cortes <hyuri.cortes@trutec.com.br>",
                Destination: {
                    ToAddresses: [
                        "Hyuri Miranda Cortes <hyuri.cortes@trutec.com.br>",
                    ],
                },
                Message: {
                    Subject: {
                        Data: "Olá Mundo",
                    },
                    Body: {
                        Text: {
                            Data: "Envio de e-mail feito com sucesso",
                        },
                    },
                },
                ConfigurationSetName: "Umbriel",
            })
            .promise();
    }
}

export default SendEmailService;
