import { Link } from "react-router-dom";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './card.css';
import React, { useState } from 'react';

import { FreeMode, Pagination } from 'swiper/modules';

export default function CardCollectionSlider(props) {
  
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  var onresize = function() {
    setWidth(document.body.clientWidth);
    setHeight(document.body.clientHeight);
  }
  window.addEventListener("resize", onresize);

  return (
      <>
      <div id="app">
      <Swiper
      slidesPerView={width > 1500 ? 4 : (width < 1100 ? (width < 700 ? 1 : 2) : 3)}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
              {props.data.map((card) => (
                  <SwiperSlide>
                      <Link className="link" to={"exhibition/"+card._id}>
                          <Card card={card} />
                      </Link>
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>
    </>
  );
}