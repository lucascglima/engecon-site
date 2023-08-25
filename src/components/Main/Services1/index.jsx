import Link from "next/link";
import services from "../../../data/main/services1.json";

import Icon from "@mdi/react";
import {
  mdiFormatPaint,
  mdiOfficeBuildingCogOutline,
  mdiHammerScrewdriver,
} from "@mdi/js";
const Services = () => {
  services.forEach((el, i) => {
    if (i == 0) {
      el.icon = (
        <Icon path={mdiHammerScrewdriver} size={2} className="blue-text" />
      );
    }
    if (i == 1) {
      el.icon = (
        <Icon
          path={mdiOfficeBuildingCogOutline}
          size={2}
          className="blue-text"
        />
      );
    }
    if (i == 2) {
      el.icon = <Icon path={mdiFormatPaint} size={2} className="blue-text" />;
    }
  });
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-80">
              <div className="flex">
                <div className="m-title valign">
                  <div>
                    <h6 className="sub-head radius mb-20">
                      <span className="fz-12 ls2 text-u">
                        Qualidade garantida
                      </span>
                    </h6>
                    <h2 className="fw-700 gr-purple-red-text">
                      Nossos Serviços
                    </h2>
                  </div>
                </div>
                <div className="s-title valign ml-auto">
                  {/* <h6>
                    <Link href="/services-creative">
                      <a>Ver mais</a>
                    </Link>
                    <i className="icon fz-20 pe-7s-angle-right"></i>
                  </h6> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          {services.map((service) => (
            <div className="col-lg-4 " key={service.id}>
              <div
                className="item shadw bord wow fadeInUp   "
                data-wow-delay=".1s"
              >
                <div className="icon fz-50 mb-15 rest">{service.icon}</div>
                <h6 className="mb-15  fw-900">{service.title}</h6>
                <p>{service.detials}</p>
                <div className="tag mt-30">
                  {service.tags.map((tag, i) => (
                    <a
                      href="#0"
                      className="me-1 green-text dark-blue-bg fw-600"
                      key={i}
                    >
                      <span>{tag}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
