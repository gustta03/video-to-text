import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: false,
  auth: {
    user: "151cf29b134f1e",
    pass: "b53f3fb0c88198",
  },
});

export const emailHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de Assinatura</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            width: 100px;
        }
        .content {
            text-align: center;
            padding: 20px 0;
        }
        .content p {
            font-size: 16px;
            line-height: 1.5;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            font-size: 14px;
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <h1>Entrar na plataforma</h1>
            <p>Olá,</p>
            <p>Obrigado por assinar o fluent.ly! Você pode acessar a plataforma clicando no botão abaixo:</p>
            <a href="http://localhost:3000/pages/login" class="button">Confirmar Assinatura</a>
            <p>Se você não se inscreveu em nosso serviço, por favor ignore este email.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 fluent.ly. Todos os direitos reservados.</p>
        </div>
    </div>
</body>
</html>
`;
