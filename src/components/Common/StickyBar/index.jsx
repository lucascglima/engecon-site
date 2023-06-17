import { useEffect } from "react";
import Link from "next/link";

const StickyBar = () => {
  useEffect(() => {
    const sticky_bar = document.querySelector(".sticky-bar");
    if (window.pageYOffset > 600) {
      sticky_bar.classList.add("active");
    } else {
      sticky_bar.classList.remove("active");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        sticky_bar.classList.add("active");
      } else {
        sticky_bar.classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="sticky-bar">
      <div className="left-bar">
        <a
          className="contact-butn pointer"
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=55819888021",
              "_blank"
            );
          }}
        >
          <span className="green-text">Entrar em contato</span>
          <span className="icon ml-10">
            <i className="fab fa-whatsapp green-text"></i>
          </span>
        </a>
      </div>
      <div className="right-bar">
        <div className="social-text fz-13">
          <span className="text ">Siga a gente</span>
          <a
            onClick={() => {
              window.open("https://www.instagram.com/engeconrecife/", "_blank");
            }}
            className="pointer"
          >
            Instagram
          </a>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
