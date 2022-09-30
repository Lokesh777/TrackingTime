
import React from "react";
// import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Image } from "@chakra-ui/react";

export default function Slider(){
  const CONTAINER_STYLE= {
   
    //   position: "relative",
    //   height: "10vh",
    //   width: "300%",
    //   display: "flex",
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "middle"
    //   alignItems: "left"
  }

const CARD_STYLE = {
      height: "200px",
      width: "800px",
    //   paddingTop: "80px",
    //   margin: "0 100px",
    //   textAlign: "center",
    //   background: "#52C0F5",
    // //   color: "#FFF",
    //   fontFamily: "sans-serif",
    //   fontSize: "12px",
    //   textTransform: "uppercase",
    //   borderRadius: "10px",
    //   boxSizing: "border-box"
    
  }

 
    return (
      <div style={CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} spread="wide" autoplay_speed={2500}>
        <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo11.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo2.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo3.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo4.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo5.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo6.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo7.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo8.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo9.jpg" alt="moma" />
          <Image style={CARD_STYLE} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo10.jpg" alt="moma" />
         
        </ReactCardCarousel>
      </div>
    );
  }

