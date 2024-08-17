"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountStatusUseCase = void 0;
const transporter_config_1 = require("@/main/config/transporter-config");
function generateRandomHash(length) {
    const array = new Uint8Array(length / 2);
    crypto.getRandomValues(array);
    return Array.from(array, (byte) => ("0" + byte.toString(16)).slice(-2)).join("");
}
class UpdateAccountStatusUseCase {
    constructor(customerAccountRepository) {
        this.customerAccountRepository = customerAccountRepository;
    }
    async update(param) {
        try {
            const { status, email } = param;
            const password = generateRandomHash(10);
            const mailOptions = {
                to: email,
                from: "gustavoalves003.dev@gmail.com",
                subject: "Confirmação de assinatura | fluently",
                html: transporter_config_1.emailHtml,
            };
            const customer = await this.customerAccountRepository.loadByEmail(param.email);
            if (!customer) {
                this.customerAccountRepository.add({
                    email: param.email,
                    password: password,
                });
                transporter_config_1.transporter.sendMail(mailOptions, function (err) {
                    console.log("email sent");
                    if (err) {
                        console.log(err);
                    }
                    else {
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
                    transporter_config_1.transporter.sendMail(mailOptions, function (err) {
                        console.log("email sent");
                        if (err) {
                            console.log(err);
                        }
                        else {
                            return null;
                        }
                    });
                }
            }
            return null;
        }
        catch (error) {
            throw new Error(`error at usecase: ${error}`);
        }
    }
}
exports.UpdateAccountStatusUseCase = UpdateAccountStatusUseCase;
