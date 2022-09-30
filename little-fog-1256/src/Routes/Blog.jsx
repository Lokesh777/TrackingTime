import {  Box, Container } from "@chakra-ui/react";
import SlideShow from "../Components/SliderSwipe";
// import Slider from "../Components/slider";

export default function Blog (){

    return(
       
        <Container>
             {/* <h1>Blog  Page</h1> */}
            <Box 
            //  <SlideSwipe/>
          marginLeft="-22rem"
             border="2px solid red" width='242%' height="15rem">    <SlideShow/>
  {/* <Slider    /> */}
             </Box> 
         
             <h1>Blog  Page</h1>
             <h1>Blog  Page</h1>
             <h1>Blog  Page</h1>
             <h1>Blog  Page</h1>  <h1>Blog  Page</h1>  <h1>Blog  Page</h1>
        </Container>
    )
}