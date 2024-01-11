/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Link from "next/link";
import footerData from "../../../data/footers/main-footer.json";

const Footer = ({ footerClass, footerBg, business, creative }) => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!creative) footerRef.current.setAttribute("data-overlay-dark", "0");
  }, [creative]);

  return (
    <footer className={footerClass} ref={footerRef}>
      <div className="container pt-80 pb-80 main-footer">
        <div className="row row-footer">
          <div className="col col-footer col-footer-main">
            <h5>Serviços</h5>
            <p>
              <Link href="/recovery-structural-reinforcement">
                <a className="footer-link pointer">
                  {" "}
                  Recuperação e Reforço Estrutural
                </a>
              </Link>
            </p>
            <p>
              <Link href="/raa-treatment">
                <a className="footer-link pointer"> Tratamento de RAA</a>
              </Link>
            </p>
            <p>
              <Link href="/reinforcement-of-coffin-building">
                <a className="footer-link pointer">Reforço de prédio caixão</a>
              </Link>
            </p>
            <p>
              <Link href="/impermeabilization">
                <a className="footer-link pointer">Impermeabilização</a>
              </Link>
            </p>
          </div>
          <div className="col col-footer col-footer-main">
            <h5>Fale conosco</h5>
            <p>
              <strong>Telefone:</strong> (81) 3127-2701
            </p>
            <p>
              <strong>Celular:</strong> (81) 9.9888-0215 / (81) 9.9982-2701
            </p>
            <p>
              <strong>E-mail:</strong> contato@engeconrecife.com.br
            </p>
            <p>
              <strong>Endereço:</strong> Rua Marechal Rondon, 146 Cx Postal 521
              – Casa Forte – Recife – PE CEP 52.061-055
            </p>
            <p>
              <strong>CNPJ:</strong> 23.131.228/0001-16
            </p>
            <p>
              <strong>Engecon Serviços de Engenharia LTDA</strong>
            </p>
            <p></p>
          </div>
          <div className="col col-footer col-footer-main">
            <h5>Siga nossas redes</h5>
            <div className="flex text-center mt-10">
              <a
                className="mr-10"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=5581998880215",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-whatsapp fz-24"></i>
              </a>
              <p
                className="ms-4 pointer text-hover"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=5581998880215",
                    "_blank"
                  );
                }}
              >
                Whatsapp
              </p>
            </div>
            <div className="flex">
              <a
                className="mr-10"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/engeconrecife/",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-instagram fz-24"></i>
              </a>
              <p
                className="ms-4 pointer text-hover"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/engeconrecife/",
                    "_blank"
                  );
                }}
              >
                Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
