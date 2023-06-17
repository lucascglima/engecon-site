import heroData from "../../../data/architecture/hero.json";
import SwiperCore, { Navigation } from "swiper";
import Split from "../../Split";
import testimonials from "../../../data/architecture/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);
const Hero = () => {
  return (
    <section className="hero-cr section-padding" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-exp">
              <div
                className="img bg-img"
                style={{
                  backgroundImage:
                    "url('img/engecon/impermeabilizacao/1-who.webp')",
                }}
              ></div>
              <div id="circle">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="300px"
                  height="300px"
                  viewBox="0 0 300 300"
                  enableBackground="new 0 0 300 300"
                  xmlSpace="preserve"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text fill="#fff">
                      <textPath xlinkHref="#circlePath">
                        serviços de engenharia. serviços de engenharia
                      </textPath>
                    </text>
                  </g>
                </svg>
              </div>
              <div className="rotate-exp">
                <h2 className="yellow-green-color">{heroData.years}</h2>
                <h6>
                  Anos <br /> De experiência
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h5 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">Quem somos</span>
              </h5>
              <h3 className="mb-30 gr-purple-red-text">{heroData.text}</h3>
              <p className="mb-10">{heroData.text2}</p>
              <p>{heroData.text3}</p>
              {/* <a
                href="#0"
                data-scroll-nav="2"
                className="butn butn-md gr-purple-red-bg text-light radius-30 mt-30"
              >
                <span>Sobre nós</span>
                <span className="bord-round"></span>
              </a> */}
            </div>
          </div>
        </div>
        {/* <div className="clients-carsouel mt-100">
          <div className="container">
            <div className="line-head">
              <h6>+200 Clientes satisfeitos</h6>
            </div>
            <Swiper
              id="content-carousel-container-unq-6"
              className="swiper-container"
              slidesPerView={5}
              spaceBetween={0}
              loop={true}
              speed={1000}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {testimonials.clients.map((client, idx) => (
                <SwiperSlide key={idx}>
                  <div className="item">
                    <div className="img">
                      <Split>
                        <a href="#0" className="link" data-splitting>
                          Engecon recife
                        </a>
                      </Split>
                      <img src={client} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
