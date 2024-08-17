import { emailHtml, transporter } from "@/main/config/transporter-config";
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
      const password = generateRandomHash(10);

      const mailOptions = {
        to: email,
        from: "gustavoalves003.dev@gmail.com",
        subject: "Confirmação de assinatura | fluently",
        html: emailHtml,
      };

      const customer = await this.customerAccountRepository.loadByEmail(
        param.email
      );

      if (!customer) {
        this.customerAccountRepository.add({
          email: param.email,
          password: password,
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
        console.log(param.eventType);
        if (param.eventType === "order_approved") {
          transporter.sendMail(mailOptions, function (err) {
            console.log("email sent");

            if (err) {
              console.log(err);
            } else {
              return null;
            }
          });
        }
      }

      return null;
    } catch (error) {
      throw new Error(`error at usecase: ${error}`);
    }
  }
}
