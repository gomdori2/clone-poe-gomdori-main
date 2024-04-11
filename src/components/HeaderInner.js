import React from "react";
import "../styles/Header-inner.scss";

const HeaderInner = ({ children }) => {
  return (
    <div className="header-inner" id="">
      <div className="header-inner-top">
        <div className="header-inner-top-user">
          <a className="">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="header-inner-top-nation">
          <a className="">
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className="game-start">
        <div className="poe-game-logo">
          <a className="poe-game-logo-image"></a>
          <div>
            <a>게임 시작</a>
            <a>다운로드</a>
          </div>
        </div>
        <div className="game-start-btn-wrap"></div>
      </div>
      {/* 일단 완료 되긴 했는데 개판인거 같음. flex, gap으로 변경 */}
      <div className="game-menu-wrap">
        <ul className="game-menu-nav-list">
          <li>
            <a className="menu-nav-list-news"></a>
          </li>
          <li>
            <a className="menu-nav-list-info"></a>
          </li>
          <li>
            <a className="menu-nav-list-commu"></a>
          </li>
          <li>
            <a className="menu-nav-list-rank"></a>
          </li>
          <li>
            <a className="menu-nav-list-trade"></a>
          </li>

          <li>
            <a className="menu-nav-list-shop"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderInner;
