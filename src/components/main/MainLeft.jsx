import React, { useEffect, useState } from 'react';

import "../../styles/MainLeft.scss";

const MainLeft = () => {
 
  return (
    <div className="content-left">
      {/* banner-bar */}
      <div className="banner-bar"></div>

      {/* guide */}
      <div className="guide-section">
        <div className='guide-box-wrap'>
          <div className="guide-box guide-box1">
            <div className="guide-text">
              <div className="guide-title">패스 오브 엑자일 2 정보 공개!</div>
              <div className="guide-desc">패스오브 엑자일 2에 대한 내용을 확인하세요!</div>
            </div>
            <div className="guide-btn-wrap">
              <a className="guide-btn">자세히 보기</a>
            </div>
          </div>

          <div className="guide-box guide-box2">
            <div className="guide-text">
              <div className="guide-title">신규 및 복귀 게임 가이드</div>
              <div className="guide-desc">엑린이, 복귀를 위한 모든 정보가 이곳에 있다!</div>
            </div>
            <div className="guide-btn-wrap">
              <a className="guide-btn">자세히 보기</a>
            </div>
          </div>
          <div className="guide-box guide-box1">
            <div className="guide-text">
              <div className="guide-title">패스 오브 엑자일 2 정보 공개!</div>
              <div className="guide-desc">패스오브 엑자일 2에 대한 내용을 확인하세요!</div>
            </div>
            <div className="guide-btn-wrap">
              <a className="guide-btn">자세히 보기</a>
            </div>
          </div>

          <div className="guide-box guide-box2">
            <div className="guide-text">
              <div className="guide-title">신규 및 복귀 게임 가이드</div>
              <div className="guide-desc">엑린이, 복귀를 위한 모든 정보가 이곳에 있다!</div>
            </div>
            <div className="guide-btn-wrap">
              <a className="guide-btn">자세히 보기</a>
            </div>
          </div>
        </div>
        
        <div className="shop-banner-wrap">
          <div className="shop-banner banner1">
            <div className="shop-info">
              <span>성기사<br />서포터 팩<br /><br />99,000</span>
            </div>
            <div className="shop-btn-wrap">
              <div className="liner-hover-div">
                <span className="liner-animation-l"></span>
                <span className="liner-animation-r"></span>
                <span className="liner-animation-b"></span>
                <span className="liner-animation-t"></span>
                <p>구매하기</p>
              </div>
              <div className="liner-hover-div small"></div>
            </div>
          </div>

          <div className="shop-banner banner2">
            <div className="shop-info">
              <span>성기사<br />서포터 팩<br /><br />99,000</span>
            </div>
            <div className="shop-btn-wrap">
              <div className="liner-hover-div">
                <span className="liner-animation-l"></span>
                <span className="liner-animation-r"></span>
                <span className="liner-animation-b"></span>
                <span className="liner-animation-t"></span>
                <p>구매하기</p>
              </div>
              <div className="liner-hover-div small"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 트레일러 영상모음 */}
      <div className="trailer-section">
        <div className="recommend-title"></div>
        <div className="official-trailer"></div>
        <div className="trailer-slide">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;