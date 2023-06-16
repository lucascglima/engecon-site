/* eslint-disable @next/next/no-img-element */
import process from "../../../data/business/process.json";

const Process = ({ services }) => {
  return (
    <section className="process-img section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="round-head mb-80">
              <h6 className="ls2 text-u fz-13 fw-600 mb-20 gr-purple-red-text rest  ">
                Como funciona?
              </h6>
              <h5 className={services ? "fw-600 " : "fw-700"}>
                Serviço de Impermeabilização
              </h5>
            </div>
            <div className="steps-vr">
              {process.map((step, idx) => (
                <div
                  className={`step flex ${
                    idx !== process.length - 1 ? "mb-40" : ""
                  }`}
                  key={idx}
                >
                  <div>
                    <div className="numb  fw-600">
                      <span className="text-white">{step.numb}</span>
                      <div className="cover text-black"></div>
                    </div>
                  </div>
                  <div className="cont ml-40">
                    <h6 className={`mb-10  ${services ? "fz-16 fw-600" : ""}`}>
                      {step.title}
                    </h6>
                    <p className="fz-13">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-50 text-center">
              <a className="butn butn-md  text-light radius-30 mt-30">
                <span className="text slide-up">
                  <span className="mr-20">Entrar em contato</span>
                  <i className="fab fa-whatsapp fz-24"></i>
                </span>
                <span className="text slide-down">
                  <span className="mr-20">Entrar em contato</span>
                  <i className="fab fa-whatsapp fz-24"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="img out-box mt-50">
              <img
                src="img/engecon/enviadas/slide-1.jpg"
                alt=""
                className="process-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
