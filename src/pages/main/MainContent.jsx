import React, { useEffect, useState } from 'react';

import GameSlider from '../../components/slide/GameSlider';
import MainLeft from '../../components/main/MainLeft';
import MainRight from '../../components/main/MainRight';
import Timer from '../../components/timer/Timer.jsx';

const MainContent = () => {
  
  return (
    <div className="content">
      <GameSlider/>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#000',
          maxWidth: '920px',
          marginLeft: '5px',
        }}
      >
        <div style={{ color: '#fff', padding: '15px', width: '68%' }}>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              color: '#fff1db',
              fontSize: '13px',
            }}
          >
            <li
              style={{
                borderBottom: '1px solid #fff',
                width: '450px',
                fontSize: '16px',
                paddingBottom: '10px',
                display: 'flex',
              }}
            >
              공지사항
              <span className="more-btn"></span>
            </li>
            <li style={{ display: 'flex', gap: '20px' }}>
              <span className="notice-span">공지사항</span>
              <span>기간이 지난 상황으로 수정이 조금 들어감</span>
            </li>
            <li style={{ display: 'flex', gap: '20px' }}>
              <span className="notice-span">공지사항</span>
              <span>옆에 타이머 기간이 끝남 한달 단위로 초기화</span>
            </li>
          </ul>
        </div>
        <Timer/>
      </div>
      <MainLeft/>
      <MainRight/>
      {/* 나머지 style도 같은 방식으로 변환 가능 */}
    </div>
  );
};

export default MainContent;
