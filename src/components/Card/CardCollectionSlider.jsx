import { Link } from "react-router-dom";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './card.css';

import { FreeMode, Pagination } from 'swiper/modules';

export default function CardCollectionSlider(props) {
  console.log(window.innerWidth);
    return (
        <>
        <div id="app">
        <Swiper
        slidesPerView={2}
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