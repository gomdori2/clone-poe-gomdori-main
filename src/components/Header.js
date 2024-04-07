import React from "react";
import "../styles/Header.scss";
import daumLogo from "../images/daum-logo.png";

const Header = ({ children }) => {
  return (
    <div className="header" id="pubGameGGB">
      <div className="inner-head">
        <div className="header-logo">
          <a className="link-ggb">
            <image
              className="header-logo-daum-logo"
              style={{ backgroundImage: "url(" + daumLogo + ")" }}
            />
          </a>
          <a>
            <image className="header-logo-game-img" />
          </a>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <a></a>
        </div>
        <div>
          <p>
            안녕하세요!
            <a>gomdori2</a>님
          </p>
          <a></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
