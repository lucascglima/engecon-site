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
      <div className="container pt-80 pb-80">
        <div className="row row-footer">
          <div className="col col-footer">
            <h5>Serviços</h5>
            <p>
              <Link href="/impermeabilization">
                <a className="footer-link pointer">Impermeabilização</a>
              </Link>
            </p>
            <p>
              <Link href="/structural-recovery">
                <a className="footer-link pointer"> Recuperação estrutural</a>
              </Link>
            </p>
            <p>
              <Link href="/structural-reinforcement">
                <a className="footer-link pointer"> Reforço estrutural</a>
              </Link>
            </p>
          </div>
          <div className="col col-footer">
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
              – Casa Forte – Recife – PE CEP 52.061-050
            </p>
            <p>
              <strong>CNPJ:</strong> 23.131.228/0001-16
            </p>
            <p>
              <strong>Engecon Serviços de Engenharia LTDA</strong>
            </p>
            <p></p>
          </div>
          <div className="col col-footer">
            <h5>Siga nossas redes</h5>
            <div className="flex text-center">
              <a
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=55819888021",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-whatsapp fz-24"></i>
              </a>
              <p className="ms-4 pointer text-hover">Whatsapp</p>
            </div>
            <div className="flex">
              <a
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/engeconrecife/",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-instagram fz-24"></i>
              </a>
              <p className="ms-4 pointer text-hover">Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
