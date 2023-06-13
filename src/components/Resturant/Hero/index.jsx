/* eslint-disable @next/next/no-img-element */
import heroData from '../../../data/restaurant/hero.json';

const Hero = () => {
  return (
    <section className="section-padding position-re" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="circle-img-shape md-mb50">
              <img src={heroData.image} alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="content">
              <h3 className="fz-50 line-height-1 mb-30">
                <span className="fw-200 d-block">Masterchef</span> message
              </h3>
              <h5 className="mb-20 fz-22 fw-500">{ heroData.title1 } <br /> { heroData.title2 }</h5>
              <p className="fz-18">{ heroData.message }</p>
              <div className="signature mt-20">
                <img src={heroData.signature} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="restaurant/img/37.png" alt="" className="img-out to-right" style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', width: '100px' }} />
    </section>
  )
}

export default Hero