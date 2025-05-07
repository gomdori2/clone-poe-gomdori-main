import React from 'react'
import "../../styles/Main-header-inner.scss"

const MainHeader = () => {
  return (
    <div className="main-header-inner">
          <div className="game-menu-inner-wrap">
            <div className="main-header-inner-top">
              <div className="main-header-inner-top-user">
                <div className="main-header-inner-top-user-link">
                  <a>로그인</a>
                  <a>회원 가입</a>
                  <a>고객센터</a>
                </div>
              </div>
              <div className="main-header-inner-top-nation">
                <div className="top-nation-icon">
                  <a className="top-nation-icon-uk"></a>
                  <a className="top-nation-icon-kr"></a>
                </div>
              </div>
              <div className="top-game-start">
                <a className="top-game-start-btn"></a>
                <a className="top-game-download-btn"></a>
              </div>
            </div>
            <div className="game-start">
              <div className="poe-game-logo">
                <a className="poe-game-logo-image"></a>
              </div>
              <div className="game-start-btn-wrap"></div>
            </div>
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
  )
}

export default MainHeader