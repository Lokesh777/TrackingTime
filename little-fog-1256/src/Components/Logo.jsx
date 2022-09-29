import React from "react";
// import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <div {...props}>
      {/* <Text fontSize="lg" fontWeight="bold"> */}
      <img style={{width:"12rem",height:"3rem"}} alt="Logo" src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg" />
      {/* </Text> */}
    </div>
  );
}