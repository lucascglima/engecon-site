/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../../common/initIsotope";
import portfolio from "../../../data/main/portfolio-rec.json";

const Portfolio = () => {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio section-padding bg-gray">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-6">
            <div className="simple-head">
              <div>
                <h6 className="sub-head radius mb-20">
                  <span className="fz-12 ls2 text-u">
                    Conheça nosso trabalho
                  </span>
                </h6>
              </div>
              <h2 className="fz-40 fw-800 gr-purple-red-text inline">
                Recuperação estrutural
              </h2>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div className="filtering text-center d-flex align-items-end">
              <div className="filter">
                {portfolio.filters.map((filter, idx) => (
                  <span
                    data-filter={filter.operator}
                    className={`${idx === 0 ? "active" : ""}`}
                    key={idx}
                  >
                    {filter.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="gallery">
          <div className="row">
            {portfolio.images.map((image, idx) => (
              <div
                className={`col-lg-4 col-md-6 items ${image.filter} wow`}
                key={idx}
              >
                <div className="item-img">
                  {/* <Link href="structural-recovery"> */}
                  <a className="imago wow">
                    <img src={image.url} alt="image" />
                    <div className="item-img-overlay dark-blue-bg text-white justify-center">
                      <span className="text-center see-more see-more-services text-light fz-16">
                        {image.details}
                      </span>
                      {/* <i className="fas fa-arrow-right icon text-light fz-20"></i> */}
                    </div>
                  </a>
                  {/* </Link> */}
                </div>
                <div className="cont mt-30 text-center">
                  <h6 className="fw-700 fz-17 mb-5">{image.title}</h6>
                  <p className="fw-500">{image.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="curve-cls bottom">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 500 250"
          enableBackground="new 0 0 500 250"
          xmlSpace="preserve"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;
