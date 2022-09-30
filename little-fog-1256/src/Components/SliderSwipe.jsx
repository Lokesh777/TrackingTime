import { Image } from "@chakra-ui/react";
import React from "react";
import ReactCardCarousel from "react-card-carousel";
import "../App.css"
// import "./styles.css";
function SlideShow() {


  return (
    <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
      {/* <div className="card">First Card</div> */}
      <Image className="card"
    //   style={CARD_STYLE}
       src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo11.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo2.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo3.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo4.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo5.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo6.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo7.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo8.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo9.jpg" alt="moma" />
          <Image className="card"
        //   style={CARD_STYLE}
           src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo10.jpg" alt="moma" />
    </ReactCardCarousel>
  );
}

export default SlideShow;
