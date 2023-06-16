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
            <p>Impermeabilização</p>
            <p>Recuperação estrutural</p>
            <p>Reforço estrutural</p>
          </div>
          <div className="col col-footer">
            <h5>Fale conosco</h5>
            <p>Telefone: (81) 3333-3333</p>
            <p>E-mail: contato@engeconrecife.com</p>
            <p>Endereço: Rua marechal Rondon, 250</p>
            <p>CNPJ: XXXX-XXXXX-XXXXX</p>
          </div>
          <div className="col col-footer">
            <h5>Siga nossas redes</h5>
            <div className="flex">
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
              <p className="ms-4">Whatsapp</p>
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
              <p className="ms-4">Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
