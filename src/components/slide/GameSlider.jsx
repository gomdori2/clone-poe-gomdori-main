import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

import "../../styles/Game-banner-slide.scss"


const GameSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slide-wrap">
      {/* 메인 슬라이더 */}
      <Swiper
        className="game-slide2"
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Pagination, Thumbs]}
      >
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(/www/images/banner-img-guide.jpg)',
            }}
          >
            <a href="#"></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(/www/images/banner-img-price-box.jpg)',
            }}
          >
            <a href="#"></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(/www/images/banner-img-security.jpg)',
            }}
          >
            <a href="#"></a>
          </div>
        </SwiperSlide>

        {/* 버튼, 페이지네이션 */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* 썸네일 슬라이더 */}
      <Swiper
        className="game-slide"
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
      >
        <SwiperSlide>
          <div className="game-slide-text">네크로폴리스 리그 맞춤형 가이드</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="game-slide-text">네크로폴리스 리그 가이드 안내</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="game-slide-text">네크로폴리스 미스터리 박스 출시 입니다</div>
        </SwiperSlide>
      </Swiper>

      {/* 기타 요소 */}
      <div className="kako-ch">
        <a className="kako-ch-btn" href="#"></a>
      </div>
    </div>
  );
};

export default GameSlider;