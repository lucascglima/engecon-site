import { useEffect } from "react";
import Link from "next/link";
import parallaxie from "../../../common/parallaxie";

const CallToAction = () => {
  useEffect(() => {
    parallaxie(".call-action.bg-img.parallaxie");
  }, []);

  return (
    <section
      className="section-padding bg-img parallaxie call-action"
      data-background="img/engecon/impermeabilizacao/7.jpeg"
      data-overlay-dark="6"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center">
              <h2 className="mb-5">Tem um projeto em mente? Vamos discutir.</h2>
              <p>
                Entre em contato com nossa equipe e tenha a segurança e
                tranquilidade para o seu condomínio e empresa
              </p>
              <Link href="/contact-creative">
                <a className="butn butn-md green-bg text-light radius-30 mt-30">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
