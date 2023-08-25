import IntroData from "../../../data/main/intro.json";

import Icon from "@mdi/react";
import { mdiOfficeBuildingCog } from "@mdi/js";
import { mdiCheckDecagram } from "@mdi/js";
import { mdiSecurity } from "@mdi/js";

const IntroUp = () => {
  IntroData.forEach((el, i) => {
    if (i == 0) {
      el.icon = (
        <Icon path={mdiOfficeBuildingCog} size={2} className="green-text" />
      );
    }
    if (i == 1) {
      el.icon = (
        <Icon path={mdiCheckDecagram} size={2} className="green-text" />
      );
    }
    if (i == 2) {
      el.icon = <Icon path={mdiSecurity} size={2} className="green-text" />;
    }
  });
  return (
    <section className="intro-up bg-gray">
      <div className="container">
        <div className="row">
          {IntroData.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div className="item flex wow fadeInUp" data-wow-delay=".1s">
                <div className="icon fz-40 mr-30 rest">{item.icon}</div>
                <div className="cont">
                  <h6 className="mb-5 fw-600">{item.title}</h6>
                  <p>{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroUp;
