export default async function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    auth: {
      user: process.env.NEXT_PUBLIC_USER,
      pass: process.env.NEXT_PUBLIC_CODE,
    },
  });
  console.log(transporter);

  const mailData = {
    from: process.env.NEXT_PUBLIC_USER,
    to: process.env.NEXT_PUBLIC_USER,
    subject: "Solicitação de economia de energia - " + req.body.name,
    html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <title>Solicit</title>
    <style>
        /* Email body styles */
        body {
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        /* Email container styles */
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background-color: #ffffff;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }

        /* Email header styles */
        .email-header {
            text-align: center;
            margin-bottom: 30px;
        }

        /* Email heading styles */
        .email-heading {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
            color: #2f3d4a;
            margin-top: 12px;
        }

        /* Email message styles */
        .email-message {
            margin-bottom: 30px;
        }

        /* Email signature styles */
        .email-signature {
            margin-top: 30px;
            text-align: right;
        }

        /* Email signature text styles */
        .email-signature-text {
            font-size: 18px;
            font-style: italic;
            color: #999999;
            margin: 0;
        }

        /* Email signature name styles */
        .email-signature-name {
            font-size: 20px;
            font-weight: bold;
            color: #2f3d4a;
            margin: 5px 0 0 0;
        }
    </style>
  </head>
  <body>
    <div class="email-container">
        <div class="email-header">
            <img src="https://www.trenergiasolar.eco.br/img/logo.png" alt="TR Energia solar">
            <h1 class="email-heading">Recebemos um contato pelo site</h1>
        </div>
        <div class="email-message">
              Nome: <strong>${req.body.name}</strong> <br/>
              Nome da empresa: <strong>${req.body.name}</strong> <br/>
              E-mail: <strong>${req.body.email}</strong> <br/>
              Telefone (Whatsapp): <strong>${
                req.body.phoneNumber
              }</strong> <br/>
              Valor médio da conta: <strong>R$${
                req.body.accountValue
              }</strong><br/>
              Economia sugerida por ano: <strong>R$${
                req.body.economyPerYear
              }</strong>  <br/>
              Alta tensão: <strong>${
                req.body.highVoltage ? "Sim" : "Não"
              }</strong> <br/>
              Politica de privacidade assinada: <strong>${
                req.body.privacy ? "Sim" : "Não"
              }</strong> <br/>
        </p>  
            <div class="email-signature">
                <p class="email-signature-text">TR Energia solar</p>
            </div>
        </div>
    </div>
  </body>
  </html>`,
  };
  let info = await transporter.sendMail(mailData);

  const mailDataClient = {
    from: process.env.NEXT_PUBLIC_USER,
    to: req.body.email,
    subject: "TR Energia Solar - Solicitação de energia limpa",
    html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <title>Solicitação de energia limpa</title>
    <style>
        /* Email body styles */
        body {
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            line-height: 1.6;
            color: #333333;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        /* Email container styles */
        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background-color: #ffffff;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }

        /* Email header styles */
        .email-header {
            text-align: center;
            margin-bottom: 30px;
        }

        /* Email heading styles */
        .email-heading {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
            color: #2f3d4a;
        }

        /* Email message styles */
        .email-message {
            margin-bottom: 30px;
        }

        /* Email signature styles */
        .email-signature {
            margin-top: 30px;
            text-align: right;
        }

        /* Email signature text styles */
        .email-signature-text {
            font-size: 18px;
            font-style: italic;
            color: #999999;
            margin: 0;
        }

        /* Email signature name styles */
        .email-signature-name {
            font-size: 20px;
            font-weight: bold;
            color: #2f3d4a;
            margin: 5px 0 0 0;
        }
    </style>
  </head>
  <body>
    <div class="email-container">
        <div class="email-header">
            <img src="https://www.trenergiasolar.eco.br/img/logo.png" alt="Solar Energy Company Logo">
            <h1 class="email-heading">Solicitação de economia, realizadacom sucesso!</h1>
        </div>
        <div class="email-message">
        Prezado ${req.body.name},

        <p>
        Obrigado por enviar sua inscrição à TR Energia Solar para o Sistema de Locação de Painéis Solares. Temos o prazer de informar que sua inscrição foi recebida com sucesso.
        
        <p/>
        <p>
        Nossa equipe de especialistas está analisando sua inscrição e entraremos em contato com você em breve para discutir os detalhes do programa e responder a quaisquer perguntas que você possa ter. Com este programa, você poderá reduzir o valor da sua conta de energia em até 20% sem nenhuma instalação.
        <p/>
        <p>
        Usaremos o e-mail e o número de telefone que você forneceu para entrar em contato com você o mais rápido possível.

        <p/>
        <p>
        Se você tiver alguma dúvida ou preocupação em relação ao seu sistema, sinta-se à vontade para entrar em contato com nossa equipe de atendimento ao cliente em (81) 99877-5665 ou envie-nos um e-mail para contato@trenergia.eco.br. Nossa equipe está sempre disponível para ajudá-lo com qualquer dúvida que possa ter.

        <p/>
        <p>
        Obrigado por escolher a TR Energia solar. Esperamos trabalhar com você para reduzir o valor de sua conta de energia e ajudá-lo a mudar para energia limpa e renovável.
        <p/>       
        <p>Atenciosamente,</p>
          <div class="email-signature">
                <p class="email-signature-text">TR Energia solar</p>
            </div>
    </div>
  </body>
  </html>`,
  };

  let infoClient = await transporter.sendMail(mailDataClient);

  res.send({ toTR: info, toClient: infoClient });
}
