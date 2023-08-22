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
    subject: "Contato recebido - " + req.body.name,
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
            <h1 class="email-heading">Recebemos um contato pelo site</h1>
        </div>
        <div class="email-message">
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
    <title>Obrigado por nos contatar</title>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="756" height="118" viewBox="0 0 756 118" fill="none">
<rect x="340" y="4" width="63" height="113.806" rx="4" fill="black"/>
<path d="M130.19 24.072H181.388V40.184H155.948V53.434H179.162V66.79H155.948V80.888H181.388V97H130.19V24.072ZM193.231 24.072H214.537L243.581 63.398V24.072H262.555V97H241.355L212.099 59.052V97H193.231V24.072ZM310.274 98.696C303.137 98.696 296.706 97 290.982 93.608C285.258 90.1453 280.771 85.446 277.52 79.51C274.269 73.574 272.644 67.0373 272.644 59.9C272.644 53.0453 274.269 46.756 277.52 41.032C280.841 35.308 285.435 30.7853 291.3 27.464C297.165 24.1427 303.843 22.482 311.334 22.482C315.433 22.482 319.39 22.9413 323.206 23.86C327.093 24.7787 330.591 26.086 333.7 27.782L326.704 44.212C321.899 42.2333 317.411 41.244 313.242 41.244C307.801 41.244 303.596 43.0107 300.628 46.544C297.66 50.0067 296.176 54.5647 296.176 60.218C296.176 63.8927 296.847 67.214 298.19 70.182C299.533 73.0793 301.405 75.376 303.808 77.072C306.281 78.768 309.073 79.616 312.182 79.616C313.878 79.616 315.291 79.4747 316.422 79.192V62.126L334.76 60.006V93.184C326.775 96.8587 318.613 98.696 310.274 98.696ZM443.612 98.696C436.545 98.696 430.115 97.0353 424.32 93.714C418.596 90.322 414.038 85.7287 410.646 79.934C407.325 74.0687 405.664 67.6027 405.664 60.536C405.664 53.328 407.289 46.8267 410.54 41.032C413.791 35.2373 418.243 30.7147 423.896 27.464C429.549 24.1427 435.909 22.482 442.976 22.482C446.792 22.482 450.537 22.9413 454.212 23.86C457.887 24.7787 461.031 26.086 463.646 27.782L460.784 44.212C455.696 42.304 451.103 41.35 447.004 41.35C441.351 41.35 437.005 43.0107 433.966 46.332C430.927 49.5827 429.408 54.282 429.408 60.43C429.408 66.4367 430.998 71.136 434.178 74.528C437.429 77.8493 441.916 79.51 447.64 79.51C449.831 79.51 451.88 79.298 453.788 78.874C455.696 78.45 458.028 77.6727 460.784 76.542L463.752 93.29C457.604 96.894 450.891 98.696 443.612 98.696ZM507.299 98.696C499.667 98.696 492.883 97.0707 486.947 93.82C481.082 90.5693 476.488 86.082 473.167 80.358C469.916 74.5633 468.291 67.9913 468.291 60.642C468.291 53.222 469.916 46.6147 473.167 40.82C476.488 35.0253 481.082 30.538 486.947 27.358C492.883 24.1073 499.667 22.482 507.299 22.482C514.931 22.482 521.68 24.1073 527.545 27.358C533.481 30.538 538.074 35.0253 541.325 40.82C544.646 46.544 546.307 53.1513 546.307 60.642C546.307 67.9913 544.646 74.5633 541.325 80.358C538.074 86.082 533.481 90.5693 527.545 93.82C521.609 97.0707 514.86 98.696 507.299 98.696ZM507.299 79.404C511.751 79.404 515.39 77.6727 518.217 74.21C521.114 70.7473 522.563 66.1893 522.563 60.536C522.563 56.7907 521.892 53.4693 520.549 50.572C519.277 47.604 517.475 45.3073 515.143 43.682C512.811 41.986 510.161 41.138 507.193 41.138C504.296 41.138 501.681 41.986 499.349 43.682C497.017 45.3073 495.215 47.604 493.943 50.572C492.671 53.4693 492.035 56.7907 492.035 60.536C492.035 66.1893 493.448 70.7473 496.275 74.21C499.102 77.6727 502.776 79.404 507.299 79.404ZM556.467 24.072H577.773L606.817 63.398V24.072H625.791V97H604.591L575.335 59.052V97H556.467V24.072Z" fill="black"/>
<path d="M346.227 24.072H397.425V40.184H371.985V53.434H395.199V66.79H371.985V80.888H397.425V97H346.227V24.072Z" fill="white"/>
</svg>
            <h1 class="email-heading">Obrigado por nos contatar!</h1>
        </div>
        <div class="email-message">
            <p>Prezado ${req.body.name},</p>
            <p>Recebemos sua mensagem e agradecemos seu interesse em nossa empresa.  Nossa equipe irá analisar sua mensagem e retornaremos o mais breve possível.</p>
            <p>Obrigado por nos considerar como seu parceiro em serviços de engenharia.</p>
            <p>Atenciosamente,</p>
            <div class="email-signature">
                <p class="email-signature-text">Engecon Engenharia</p>
            </div>
        </div>
    </div>
  </body>
  </html>`,
  };

  let infoClient = await transporter.sendMail(mailDataClient);

  return res.status(200).send({ toCompany: info, toClient: infoClient });
}
