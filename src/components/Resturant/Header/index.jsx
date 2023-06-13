/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Header = () => {
  return (
    <header className="restaurant-home valign" data-scroll-index="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="caption md-mb50">
              <h6 className="sub-title main-color fw-400 fz-12">
                <span className="icon-img">
                  <img src="restaurant/img/icons/fast3.png" alt="" />
                </span>
                <span className="text">Easy way to order your food</span>
              </h6>
              <h1 className="fw-800 mb-10">Healthy & fresh food in one place</h1>
              <p className="fz-20">come and see the best burguers in town bring <br /> your friends and family.</p>
              <div className="mt-30">
                <Link href="/contact-creative">
                  <a className="butn butn-md butn-dark butn-rounded">
                    <div className="flex">
                      <span>Order now</span>
                      <span className="valign">
                        <span className="text-center">
                          <i className="icon ic-shadow ml-30 fas fa-long-arrow-alt-right"></i>
                        </span>
                      </span>
                    </div>
                  </a>
                </Link>
                <a href="#0" data-scroll-nav="2" className="butn butn-underline butn-gr ml-30">
                  <span className="text main-color">See our menu</span>
                  <span className="underline-gr main-bg-color"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="restaurant/img/1.png" alt="" />
              <span className="sub-img">
                <img src="restaurant/img/2.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header