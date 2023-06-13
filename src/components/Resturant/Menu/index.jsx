/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import MenuSheet from "./Menu-Sheet";
import menuData from '../../../data/restaurant/menu.json';

const Menu = () => {
  const [Menu, setMenu] = useState(menuData);

  const openTab = (e, tab) => {
    let element = e.target;
    if (e.target.tagName !== 'LI') element = e.target.closest('li');
    
    document.querySelectorAll('.item-link').forEach(item => item.classList.remove('current'));
    element.classList.add('current');

    let newMenuContents = Menu.contents.map(item => {
      if (item.id === tab) item.closed = false;
      else item.closed = true;

      return item;
    })

    setMenu(prev => ({ ...prev, contents: newMenuContents }));
  }

  return (
    <section className="menu-book tabs section-padding bg-gray position-re" data-scroll-index="2">
      <div className="container">

        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-12 mb-15">special recipes<span></span></h6>
              <h2>Our Menu</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tab-links mb-60">
              <ul className="text-center">
                {
                  Menu.tabs.map((tab, idx) => (
                    <li 
                      className={`item-link ${idx == 0 ? 'current':''}`} 
                      data-tab={`tab-${tab.id}`} 
                      onClick={(e) => openTab(e, tab.id)} 
                      key={idx}
                    >
                      <h6 className="fz-14 text-u ls1">{ tab.title }</h6>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="position-re">
              {
                Menu.contents.map((item, idx) => (
                  <SlideDown key={idx} closed={item.closed}>
                    <div className="tab-content current" id={`tab-${item.id}`}>
                      <div className="row">
                        <MenuSheet menuList={item.list1} mb={true} />
                        <MenuSheet menuList={item.list2} />
                      </div>
                    </div>
                  </SlideDown>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="paltes">
        <div className="img1 img">
          <img src="restaurant/img/plate2.png" alt="" />
        </div>
        <div className="img2 img">
          <img src="restaurant/img/plate1.png" alt="" />
        </div>
        <div className="img3 img">
          <img src="restaurant/img/plate3.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Menu