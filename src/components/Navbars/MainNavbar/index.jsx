/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  const dropdownHover = (e) => {
    const dropdownItem =
      e.target.tagName === "SPAN" ? e.target.parentElement : e.target;
    const dropdownMenu = dropdownItem.querySelector(".dropdown-menu");
    if (dropdownMenu) dropdownMenu.classList.add("show");
  };

  const dropdownLeave = () => {
    const openedDropdown = document.querySelector(
      ".navbar .dropdown-menu.show"
    );
    if (openedDropdown) openedDropdown.classList.remove("show");
  };

  const sideDropdownHover = (e) => {
    const dropdownItem =
      e.target.tagName === "SPAN" ? e.target.parentElement : e.target;
    const dropdownSide = dropdownItem.querySelector(".dropdown-side");
    if (dropdownSide) dropdownSide.classList.add("show");
  };

  const sideDropdownLeave = () => {
    const openedSideDropdown = document.querySelector(
      ".navbar .dropdown-side.show"
    );
    if (openedSideDropdown) openedSideDropdown.classList.remove("show");
  };

  return (
    <nav className={`navbar  navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">
            {logoTheme === "dark" && (
              <img src="img/engecon/v2/logo-preta.svg" alt="" />
            )}
            {logoTheme === "light" && (
              <img src="img/engecon/v2/logo-preta.svg" alt="" />
            )}
            {!logoTheme && <img src="img/engecon/v2/logo-preta.svg" alt="" />}
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {/* <li>
              <Link href="/home-main">
                <a className="dropdown-item">Home Main</a>
              </Link>
            </li>
            <li>
              <Link href="/services-creative">
                <a className="dropdown-item">Impermeabilização</a>
              </Link>
            </li>
            <li>
              <Link href="/services-business">
                <a className="dropdown-item">Recuperação estrutural</a>
              </Link>
            </li> */}
            {/* <li
              className="nav-item dropdown"
              onMouseMove={dropdownHover}
              onMouseLeave={dropdownLeave}
            >
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/home-main">
                    <a className="dropdown-item">Home Main</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-landing-3">
                    <a className="dropdown-item">Digital Studio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-business-1">
                    <a className="dropdown-item">Bussines Startup</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-mobile-app">
                    <a className="dropdown-item">Mobile App</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-corporate">
                    <a className="dropdown-item">Corporate</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-landing-2">
                    <a className="dropdown-item">Modern Agency</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-architecture">
                    <a className="dropdown-item">Architecture</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-nft-market">
                    <a className="dropdown-item">NFTs Marketplace</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-freelancer">
                    <a className="dropdown-item">Freelancer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/home-restaurant">
                    <a className="dropdown-item">Restaurant</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="nav-item dropdown"
              onMouseMove={dropdownHover}
              onMouseLeave={dropdownLeave}
            >
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </span>
              <ul className="dropdown-menu">
                <li
                  className="dropdown-item"
                  onMouseMove={sideDropdownHover}
                  onMouseLeave={sideDropdownLeave}
                >
                  <span>
                    About <i className="fas fa-angle-right icon-arrow"></i>
                  </span>
                  <ul className="dropdown-side">
                    <li>
                      <Link href="/about-creative">
                        <a className="dropdown-item">About Creative</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-business">
                        <a className="dropdown-item">About Business</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-corporate">
                        <a className="dropdown-item">About Corporate</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="dropdown-item"
                  onMouseMove={sideDropdownHover}
                  onMouseLeave={sideDropdownLeave}
                >
                  <span>
                    Serviços <i className="fas fa-angle-right icon-arrow"></i>
                  </span>
                  <ul className="dropdown-side">
                    <li>
                      <Link href="/services-creative">
                        <a className="dropdown-item">Impermeabilização</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-business">
                        <a className="dropdown-item">Serviços de Recuperação</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className="nav-item dropdown mega-menu"
              onMouseMove={dropdownHover}
              onMouseLeave={dropdownLeave}
            >
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Portfolio
              </span>
              <div className="dropdown-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="column">
                        <h6 className="title">Classic style</h6>
                        <ul>
                          <li>
                            <Link href="/portfolio-classic-masonry">
                              <a className="dropdown-item">Classic Masonry</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-classic-2col">
                              <a className="dropdown-item">Classic 2 Column</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-classic-3col">
                              <a className="dropdown-item">Classic 3 Column</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-classic-4col">
                              <a className="dropdown-item">Classic 4 Column</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="column">
                        <h6 className="title">Colorful style</h6>
                        <ul>
                          <li>
                            <Link href="/portfolio-colorful-masonry">
                              <a className="dropdown-item">Colorful Masonry</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-colorful-2col">
                              <a className="dropdown-item">Colorful 2 Column</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-colorful-3col">
                              <a className="dropdown-item">Colorful 3 Column</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-colorful-4col">
                              <a className="dropdown-item">Colorful 4 Column</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="column no-bord">
                        <h6 className="title">Overlay style</h6>
                        <ul>
                          <li>
                            <Link href="/portfolio-overlay-masonry">
                              <a className="dropdown-item">Overlay Masonry</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-overlay-2col">
                              <a className="dropdown-item">Overlay 2 Column</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-overlay-3col">
                              <a className="dropdown-item">Overlay 3 Column</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-overlay-4col">
                              <a className="dropdown-item">Overlay 4 Column</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="nav-item dropdown"
              onMouseMove={dropdownHover}
              onMouseLeave={dropdownLeave}
            >
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blogs
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/blog-grid-creative">
                    <a className="dropdown-item">Grid Creative</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-grid-modern">
                    <a className="dropdown-item">Grid Modern</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-grid-clean">
                    <a className="dropdown-item">Grid Clean</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-side-img">
                    <a className="dropdown-item">Side Image</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-post">
                    <a className="dropdown-item">Single Post</a>
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/recovery-structural-reinforcement">
                <a className="nav-link">Recuperação e Reforço Estrutural</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/raa-treatment">
                <a className="nav-link">Tratamento de RAA</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/reinforcement-of-coffin-building">
                <a className="nav-link">Reforço de prédio caixão</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/impermeabilization">
                <a className="nav-link">Impermeabilização</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/home-main">
                <a className="nav-link">Contato</a>
              </Link>
            </li> */}
          </ul>
          <div className="social">
            <ul className="rest">
              <li className="flex">
                <a
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/engeconrecife/",
                      "_blank"
                    );
                  }}
                >
                  <i className="fab fa-instagram social-icon-nav"></i>
                </a>
                <a
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send?phone=5581998880215",
                      "_blank"
                    );
                  }}
                >
                  <i className="fab fa-whatsapp social-icon-nav"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
