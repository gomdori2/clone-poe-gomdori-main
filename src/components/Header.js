import React from "react";
import "../styles/Header.scss";
import { useState } from "react";
const Header = ({ children }) => {
  // 원래라면 데이터가 유동적으로 움직이는 애라 일단 let으로 둠.
  // let user = {
  //   id: "gomdori2",
  //   userName: "윤성환",
  // };
  const [user, setUser] = useState("gomdori2");

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
                {/* 스플릿 아이콘 이미지 적용해놓음. */}
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
            {/* 일단 default 값에 아이디 붙여놓음. 리액트 공부 후 수정할 것.(useState) */}
            <a id="userName">{user}</a>님
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
