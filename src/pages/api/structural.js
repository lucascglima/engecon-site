export default async function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    auth: {
      user: process.env.NEXT_PUBLIC_USER,
      pass: process.env.NEXT_PUBLIC_CODE,
      secure: true,
    },
  });

  const mailData = {
    from: process.env.NEXT_PUBLIC_USER,
    to: process.env.NEXT_PUBLIC_USER,
    subject:
      "Novo Contato de Recuperação e Reforço Estrutural- " + req.body.name,
    html: `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <title>Contato recebido pelo site</title>
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
           img {
            max-width: 300px;
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
            <img src="https://www.engeconrecife.com.br/img/logo-preta.svg" alt="Engecon Engenharia">
            <h1 class="email-heading">Recebemos um novo contato via website. Aqui estão os detalhes:</h1>
        </div>
        <div class="email-message">
              Contato feito pela página de <strong>Recuperação e Reforço estrutural</strong><br/>
              Nome: <strong>${req.body.name}</strong> <br/>
              E-mail: <strong>${req.body.email}</strong> <br/>
              Telefone (Whatsapp): <strong>${req.body.phoneNumber}</strong> <br/>
              Empresa: <strong>${req.body.company}</strong> <br/><br/>  
              Assunto: <strong>${req.body.subject}</strong> <br/><br/>  
              Mensagem:<br/>
              ${req.body.message}
        </p>  
            <div class="email-signature">
                <p class="email-signature-text">ENGECON ENGENHARIA</p>
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
    subject: "Engecon Engenharia - Contato recebido",
    html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <title>Engecon - Contato recebido</title>
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
        img {
            max-width: 300px;
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
            <img src="https://www.engeconrecife.com.br/img/logo-preta.svg" alt="Engecon Engenharia">
            <h1 class="email-heading">Obrigado por nos contatar a ENGECON ENGENHARIA!</h1>
        </div>
        <div class="email-message">
            <p>Prezado ${req.body.name},</p>
            <p>Recebemos sua mensagem e agradecemos seu interesse em nossa empresa.  Nossa equipe irá analisar sua mensagem e retornaremos o mais breve possível.</p>
            <p>Obrigado por nos considerar como seu parceiro em serviços de engenharia.</p>
            <p>Atenciosamente,</p>
            <div class="email-signature">
                <p class="email-signature-text">Engecon Engenharia</p>
                    <a href="https://www.engeconrecife.com.br/">Acesso nosso site</a>
                </div>
                <div>
                <a href="https://api.whatsapp.com/send?phone=5581998880215">Entre em contato pelo nosso Whatsapp</a>
                </div>
            </div>
        </div>
    </div>
  </body>
  </html>`,
  };

  //   const mailDataClient = {
  //     from: process.env.NEXT_PUBLIC_USER,
  //     to: req.body.email,
  //     subject: "Engecon Engenharia, Agradecemos pelo seu contato",
  //     html: `
  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <link rel="preconnect" href="https://fonts.googleapis.com">
  //     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  //     <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700&display=swap" rel="stylesheet">
  //     <title>Obrigado por nos contatar</title>
  //     <style>
  //         /* Email body styles */
  //         body {
  //             font-family: 'Lato', sans-serif;
  //             font-size: 16px;
  //             line-height: 1.6;
  //             color: #333333;
  //             background-color: #f5f5f5;
  //             margin: 0;
  //             padding: 0;
  //         }

  //         /* Email container styles */
  //         .email-container {
  //             width: 100%;
  //             max-width: 600px;
  //             margin: 0 auto;
  //             padding: 30px;
  //             background-color: #ffffff;
  //             box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  //         }

  //         /* Email header styles */
  //         .email-header {
  //             text-align: center;
  //             margin-bottom: 30px;
  //         }
  //         img {
  //             max-width: 300px;
  //         }

  //         /* Email heading styles */
  //         .email-heading {
  //             font-size: 24px;
  //             font-weight: bold;
  //             margin: 0;
  //             color: #2f3d4a;
  //         }

  //         /* Email message styles */
  //         .email-message {
  //             margin-bottom: 30px;
  //         }

  //         /* Email signature styles */
  //         .email-signature {
  //             margin-top: 30px;
  //             text-align: right;
  //         }

  //         /* Email signature text styles */
  //         .email-signature-text {
  //             font-size: 18px;
  //             font-style: italic;
  //             color: #999999;
  //             margin: 0;
  //         }

  //         /* Email signature name styles */
  //         .email-signature-name {
  //             font-size: 20px;
  //             font-weight: bold;
  //             color: #2f3d4a;
  //             margin: 5px 0 0 0;
  //         }
  //     </style>
  //   </head>
  //   <body>
  //     <div class="email-container">
  //         <div class="email-header">
  //             <h1 class="email-heading">Obrigado por nos contatar a ENGECON ENGENHARIA!</h1>
  //         </div>
  //         <div class="email-message">
  //             <p>Olá ${req.body.name},</p>
  //             <p>É com grande satisfação que agradecemos seu contato com a Engecon Engenharia. Sua busca por soluções em recuperação e reforço estrutural é de extrema importância para nós, e estamos entusiasmados em compartilhar como nossa expertise pode ser benéfica para seu projeto.</p><br/>
  //             <p>Com anos de operação no mercado, a Engecon Engenharia consolidou uma reputação de confiança e eficácia, oferecendo soluções estruturais inovadoras e personalizadas. Nosso time de engenheiros e técnicos especializados possui vasta experiência em diagnósticos precisos e na implementação de estratégias de reforço e recuperação que asseguram a integridade e segurança das edificações.<br/>
  //              <p>Agradecemos a oportunidade de contribuir para a segurança e durabilidade do seu empreendimento. Para qualquer esclarecimento adicional ou para dar continuidade à discussão de como podemos atender às suas necessidades específicas, por favor, não hesite em nos contatar.
  //             <div class="email-signature"></p><br/>
  //                 <p class="email-signature-text">Engecon Engenharia</p>
  //                 <div>
  //                 <a href="https://www.engeconrecife.com.br/">Acesso nosso site</a>
  //                 </div>
  //                 <div>
  //                 <a href="https://api.whatsapp.com/send?phone=5581998880215">Entre em contato pelo nosso Whatsapp</a>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  //   </body>
  //   </html>`,
  //   };

  let infoClient = await transporter.sendMail(mailDataClient);

  return res.status(200).send({ toCompany: info, toClient: infoClient });
}
