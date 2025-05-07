import React, { useEffect, useState } from 'react'

const Timer = () => {
       // 시간 관련 js
       const [timeLeft, setTimeLeft] = useState({
        day: '00',
        hour: '00',
        min: '00',
        sec: '00',
      });
    
      useEffect(() => {
        const updateClock = () => {
          const now = new Date();
          // 요일
          // const d = now.getDay();
          const d = now.getDate();
          const h = now.getHours();
          const m = now.getMinutes();
          const s = now.getSeconds();
    
          const dString = String(d).length === 1 ? `${30 - d}` : `0${30 - d}`;
          const hString = String(h).length === 1 ? `0${h}` : `${24 - h}`;
          // 60이면 분이 밀림
          const mString =
            String(m).charAt(0) === '5' && String(m) !== '50' && String(m).length > 1
              ? '0' + `${59 - m}`
              : `${59 - m}`;
          const sString =
            String(s).charAt(0) === '5' && String(s) !== '50' && String(s).length > 1
              ? '0' + `${60 - s}`
              : `${60 - s}`;
          // 나중에 건드릴땐 day, hour정도는 계산해서 그냥 안돌게 해둘것 지금은 4개다 계속 돌고있음
          setTimeLeft({
            day: dString,
            hour: hString,
            min: mString,
            sec: sString,
          });
        };
    
        updateClock(); // 초기 1회 실행
        const timer = setInterval(updateClock, 1000);
    
        return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
      }, []);
  return (
    <div style={{ width: '37%', height: '300px' }}>
          <ul>
            <li
              style={{
                paddingTop: '10px',
                background: 'url(/www/images/bg-pcbang.png)',
                height: '74px',
                maxWidth: '275px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
              >
                <img src="/www/images/title-pcbang.png" />
                <span
                  style={{
                    background: 'url(/www/images/img-pcbang-state.png) no-repeat',
                    width: '55px',
                    height: '24px',
                    display: 'inline-block',
                  }}
                ></span>
              </div>
              <div
                style={{
                  color: '#fff',
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  fontSize: '13px',
                }}
              >
                <div style={{ width: '50%' }}>피시방 접속혜택</div>
                <div style={{ width: '50%' }}>PC방 찾기</div>
              </div>
              <div
                style={{
                  color: '#fff',
                  background: 'url(/www/images/time-img.png) no-repeat',
                }}
              >
                <div style={{ height: '124px' }}>
                  <div
                      className="countdown-wrap"
                      style={{
                        width: '88%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'flex-end',
                        height: '104px',
                        paddingLeft: '16px',
                      }}
                    >
                      <div id="imgDay">{timeLeft.day}</div>
                      <div id="imgHour">{timeLeft.hour}</div>
                      <div id="imgMin">{timeLeft.min}</div>
                      <div id="imgSec">{timeLeft.sec}</div>
                    </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
  )
}

export default Timer