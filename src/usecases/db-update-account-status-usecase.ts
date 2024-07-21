import { transporter } from "@/main/config/transporter-config";
import {
  IUpdateAccountStatus,
  updateById,
} from "./protocols/db-update-account-status";
import { UpdateAccountStatusRepo } from "./protocols/db/db-update-status-account";
import { LoadAccountByEmailRepo } from "./protocols/db/db-load-account-by-email";
import { AddAccount } from "./protocols/add-account-protocol";

function generateRandomHash(length: number): string {
  const array = new Uint8Array(length / 2);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => ("0" + byte.toString(16)).slice(-2)).join(
    ""
  );
}

export class UpdateAccountStatusUseCase implements IUpdateAccountStatus {
  constructor(
    private readonly customerAccountRepository: UpdateAccountStatusRepo &
      LoadAccountByEmailRepo &
      AddAccount
  ) {}
  async update(param: updateById.Param): Promise<void> {
    try {
      const { status, email } = param;
      const mailOptions = {
        to: param.email,
        from: "gustavo@email",
        subject: "subject",
        html: `<body>
            <p>Olá, obrigado por assinar o fluent.ly!</p>

            <br />
            <p>Verificamos que você não possui conta na plataforma, mas não se preocupe criamos automaticamente pra você</p>

            <p>Para acessar entre com suas credenciais</p>
            <p>Email: ${email}</p>
            <p>Senha: ${generateRandomHash(10)}</p>
        </body>`,
      };

      const customer = await this.customerAccountRepository.loadByEmail(
        param.email
      );

      if (!customer) {
        this.customerAccountRepository.add({
          email: param.email,
          password: generateRandomHash(10),
        });

        transporter.sendMail(mailOptions, function (err) {
          console.log("email sent");

          if (err) {
            console.log(err);
          } else {
            return null;
          }
        });
      }

      if (customer) {
        await this.customerAccountRepository.updateById({
          userId: customer._id.toString(),
          status,
        });

        transporter.sendMail(mailOptions, function (err) {
          console.log("email sent");

          if (err) {
            console.log(err);
          } else {
            return null;
          }
        });
      }

      return null;
    } catch (error) {
      throw new Error(`error at usecase: ${error}`);
    }
  }
}
