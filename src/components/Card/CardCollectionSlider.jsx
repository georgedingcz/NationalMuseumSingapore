import { Link } from "react-router-dom";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './card.css';

import { Pagination } from 'swiper/modules';

export default function CardCollectionSlider(props) {
    return (
        <>
        <div id="app">
            <Swiper
                slidesPerView={2}
                spaceBetween={-50}
                pagination={{
                    clickable: false,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {props.data.map((card) => (
                    <SwiperSlide>
                        <Link className="link" to={card._id}>
                            <Card card={card} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </>
    );
}

    /*const [activeIndex, setActiveIndex] = useState(0);

    const handleSwipe = (direction) => {
      if (direction === 'left') {
        setActiveIndex(activeIndex < cardData.length - 1 ? activeIndex + 1 : activeIndex);
      } else if (direction === 'right') {
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : activeIndex);
      }
    };
  
    const handlers = useSwipeable({
      onSwipedLeft: () => handleSwipe('left'),
      onSwipedRight: () => handleSwipe('right'),
    });
  
    const cardData = [
      { title: 'Card 1', description: 'This is card 1' },
      { title: 'Card 2', description: 'This is card 2' },
      { title: 'Card 3', description: 'This is card 3' },
    ];
  
    return (
      <div {...handlers} style={{ width: '100%', height: '100%' }}>
        {props.data.map((card) => (
                <Link className="link" to={card._id}>
                    <Card card={card} />
                </Link>
        ))}
      </div>
    );
    */



    {/*}
    return (
        <>  
            <div className="App">
            <Slider {...settings}>
                <div>
                <h3>Slide 1</h3>
                <p>Content for slide 1</p>
                </div>
                <div>
                <h3>Slide 2</h3>
                <p>Content for slide 2</p>
                </div>
                <div>
                <h3>Slide 3</h3>
                <p>Content for slide 3</p>
                </div>
            </Slider>
            </div>

    */}






            {/*<div className="row">
                {props.data.map((card) => (
                        <Link className="link" to={card._id}>
                            <Card card={card} />
                        </Link>
                ))}
        </>
            </div>*/}
