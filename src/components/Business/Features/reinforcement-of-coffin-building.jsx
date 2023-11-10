import Tilt from "react-parallax-tilt";
import features from "../../../data/business/features-reinforcement-of-coffin-building.json";

const Features = ({ services }) => {
  return (
    <section
      className={`feat-exp section-padding ${
        services ? "pb-50" : "pb-0"
      } bg-dark-blue`}
      data-overlay-dark="0"
    >
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-6 ${services ? "" : "col-md-6"} valign mb-40`}
          >
            <div className="exp">
              {services ? (
                <h2 className="fw-600 ">
                  Reforço de prédio{" "}
                  <span className="fw-600 green-text"> tipo caixão.</span>{" "}
                </h2>
              ) : (
                <h2 className="fw-600 ">
                  Reforço de prédio{" "}
                  <span className="fw-600 green-text"> tipo caixão.</span>{" "}
                </h2>
              )}
            </div>
          </div>

          <div className="col-lg-4 valign">
            <div className="text">
              {services ? <p>{features.srtext}</p> : <p>{features.text}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-100">
        <div className="row">
          {features.feats.map((feature, idx) =>
            services ? (
              <div key={idx} className="col-lg-3 col-md-6 hover3d">
                <div
                  className="feat-item-img hover3d-child bg-img d-flex align-items-end"
                  style={{ backgroundImage: `url('${feature.bg}')` }}
                  data-overlay-dark="4"
                >
                  {/* <div className="num">{feature.numb}</div>
                  <div className="cont">
                    <h6 className="fz-22 fw-500">{feature.type}</h6>
                    <span className="fz-14 opacity-8 mb-5 ">
                      {feature.title}
                    </span>
                  </div> */}
                </div>
              </div>
            ) : (
              <Tilt
                key={idx}
                className="col-lg-3 col-md-6 hover3d"
                tiltMaxAngleY={10}
                tiltMaxAngleX={10}
              >
                <div
                  className="feat-item-img hover3d-child bg-img d-flex align-items-end"
                  style={{ backgroundImage: `url('${feature.bg}')` }}
                  data-overlay-dark="4"
                >
                  <div className="num">{feature.numb}</div>
                  <div className="cont">
                    <span className="fz-14 opacity-8 mb-5">
                      {feature.title}
                    </span>
                    <h6 className="fz-20">{feature.type}</h6>
                  </div>
                </div>
              </Tilt>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
