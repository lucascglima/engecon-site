/* eslint-disable @next/next/no-img-element */
import gallery from '../../../data/restaurant/gallery.json';

const Gallery = () => {
  return (
    <section className="sipm-gallery section-padding dark-bg" data-scroll-index="4">
      <div className="container-fluid ontop">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-12 mb-15">Our Gallery<span></span></h6>
              <h2>Restaurant Gallery</h2>
            </div>
          </div>
        </div>
        <div className="row mb-80 md-mb50">
          {
            gallery.map((image, idx) => (
              idx < 3 ? (
                <div className={`col-lg-4 ${idx == 1 ? 'valign':''}`} key={idx}>
                  <div className={`item-img ${idx < 2 ? 'md-mb50':''}`}>
                    <a href="#0">
                      <img src={image} alt="" />
                    </a>
                  </div>
                </div>
              ) 
              : null
            ))
          }
        </div>
        <div className="row">
          {
            gallery.map((image, idx) => (
              idx >= 3 ? (
                <div className={`col-lg-4 ${idx == 4 ? '':'valign'}`} key={idx}>
                  <div className={`item-img ${idx < 5 ? 'md-mb50':''}`}>
                    <a href="#0">
                      <img src={image} alt="" />
                    </a>
                  </div>
                </div>
              ) 
              : null
            ))
          }
        </div>
      </div>

      <div className="pt top-left opacity-1">
        <img src="restaurant/img/de/b1.svg" alt="" />
      </div>

      <div className="pt bottom-left opacity-1">
        <img src="restaurant/img/de/b2.svg" alt="" />
      </div>

      <div className="pt center-right opacity-1">
        <img src="restaurant/img/de/b4.svg" alt="" />
      </div>
    </section>
  )
}

export default Gallery