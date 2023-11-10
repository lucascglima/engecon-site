import { useEffect } from "react";
import Link from "next/link";
import parallaxie from "../../../common/parallaxie";
import LogoCristal from "../../../../public/img/engecon/logo-cristal.png";
import Image from "next/image";
const CallToAction = () => {
  useEffect(() => {
    parallaxie(".call-action.bg-img.parallaxie");
  }, []);

  return (
    <section
      className="section-padding bg-img parallaxie call-action call-action-imp"
      data-background="img/engecon/impermeabilizacao/7.webp"
      data-overlay-dark="6"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center">
              <img
                src="img/engecon/logo-cristal-img.png"
                alt="logo-cristal"
                className="logo-cristal"
              />

              <h4 className="mb-5">
                Conheça a Cristal, empresa especializada em impermeabilização de
                reservatórios.
              </h4>
              {/* <p className="text-center">
                Entre em contato e agende uma visita
              </p> */}

              <a
                className="butn butn-md green-bg text-light radius-30 mt-30"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=55819888021",
                    "_blank"
                  );
                }}
              >
                <span className="text slide-up">
                  {" "}
                  <span className="mr-20">Entrar em contato</span>
                  <i className="fab fa-whatsapp fz-24"></i>
                </span>
                <span className="text slide-down">
                  {" "}
                  <span className="mr-20">Entrar em contato</span>
                  <i className="fab fa-whatsapp fz-24"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
