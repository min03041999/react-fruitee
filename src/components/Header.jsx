import React from "react";
import { Link } from "react-router-dom";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Về Fruitee",
    path: "/about",
  },
  {
    display: "Menu",
    path: "/menu",
  },
  {
    display: "Khuyến Mãi",
    path: "/promotion",
  },
  {
    display: "Liên Hệ",
    path: "/contact",
  },
];

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">Fruitee VietNam</Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__left">
            <div className="header__menu__mobile-toggle">
              <i className="bx bx-menu-alt-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div key={index} className="header__menu__left_item">
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
