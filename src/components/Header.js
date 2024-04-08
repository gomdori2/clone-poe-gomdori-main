import React from "react";
import "../styles/Header.scss";

const Header = ({ children }) => {
  return (
    <div className="header" id="pubGameGGB">
      <div className="inner-head">
        <div className="header-logo">
          <a className="link-ggb"></a>
          <a className="header-logo-game-img"></a>
        </div>
        <div className="daum-game-nav">
          <ul className="daum-game-nav-menu">
            <li>
              <a>
                <strong className="daum-game-nav-menu-text">PC게임</strong>
                {/* 교수님한테 물어볼것. */}
                <span className="new-img" />
              </a>
            </li>
            <li>
              <a className="daum-game-nav-menu-mobile">모바일게임</a>
            </li>
          </ul>
        </div>
        <div className="daum-game-banner">
          <a>
            <image></image>
            <span></span>
          </a>
        </div>
        <div className="daum-login">
          <p>
            안녕하세요!
            <a>gomdori2</a>님
          </p>
          <a>
            <button className="daum-login-btn">로그아웃</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
