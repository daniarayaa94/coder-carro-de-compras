import * as React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';


export default function SlideView(props) {
  return (
        <Carousel showThumbs={false} showArrows={true}>
            
            <div>
                <img src={slide2} alt="slide2" />
            </div>
            <div>
                <img src={slide3} alt="slide3" />
            </div>
        </Carousel>
  );
}
