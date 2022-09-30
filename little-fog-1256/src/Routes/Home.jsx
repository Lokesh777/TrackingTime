import { Box, Button, Container, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import styles from "../AllStyle/Home.module.css";
import Footer from "../Components/Footer";
import Slider from "../Components/slider";
// import SlideShow from "../Components/SliderSwipe";

export default function HomeLandingPage (){

    return(
       <Container className={styles.mainHomeContainer} maxW='6xl'  >
        <Box className={styles.mainLandingPage} >
            <Text className={styles.childOne} >TRACKINGTIME TIME TRACKER SOFTWARE</Text>
          <br />
            <Text className={styles.childTwo}>SET AND FORGET TIME TRACKING</Text>

            <Text className={styles.childThree}  >Bring your productivity <br />
             to the next level.</Text>
              <br />

          
                <Flex textAlign="center" >

                    <Input
                       borderColor="purple"
                       color="purple"
                        width="19rem"
                        // marginRight="1rem"
                        // marginLeft="20rem"
                    className={styles.signInFreeFormInput}
                     placeholder="Your Work Email"  />

                    <Button
                    className={styles.signInFreeFormBtn} 
                    // height="2.6rem"
                    // width="15rem"
                    color={["white", "primary.500", "white", "blwhiteack"]}
                    bg={["purple", "purple", "primary.500", "primary.500"]}
                    _hover={{
                        color:"black",
                    bg: ["white", "#805AD5", "white", "primary.600"]
                    }} 
                   >
                    START FOR FREE!
                    </Button>
                </Flex>  
                
                
                <Flex 
                   className={styles.signInFreeFormGoogle} 
                rounded="lg"
                          >
                    
                        
                            <Image 
                            
                            boxSize='28px'
                                objectFit='cover'
                                marginRight="1rem"
                                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
                                    alt="google icon" />

                            <Text
                              className={styles.signInFreeFormGoogleText} 
                              _hover={{
                                color: ["purple", "#805AD5", "purple", "primary.600"],
                                textDecoration: "underline"
                            }} 
                            >Sign in with Google</Text>
                </Flex>
                 
                 
        </Box>
      
        <Box   >
          <Image  
        //   width="max-content"
          className={styles.mainLandingPageSecndBoxImage}
          src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/ilus-header-2.svg"
          alt="time data sheet"/>  
           
        </Box>
        <Box 
          // marginLeft="-22rem" border="2px solid red" 
          // width='242%' height="15rem"
             >  
               {/* <SlideShow/> */}
               <Slider/>
             </Box> 
         
         <Text className={styles.HomeFeatureText}>THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.</Text>
         <br />
         <Flex className={styles.imageTriple}>
             <Box className={styles.HomePageImageCard}  >
              <Image  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-1.svg" alt="image1"/>
               <Text className={styles.HomeIMageCardText}>Measure your team’s productivity</Text>
              <Text className={styles.HomeImagecardTextPara}>Get a record of the worked hours and keep your projects in order, be abreast of ongoing or completed projects with our super friendly app.</Text>
             </Box>
             <Box className={styles.HomePageImageCard}>
              <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-2.svg" alt="image1"/>
              <Text className={styles.HomeIMageCardText}>The most flexible reporting engine</Text>
              <Text className={styles.HomeImagecardTextPara}>Project budgeting, client billing, payroll, productivity analytics and much more: No matter what kind of reports you need, TrackingTime has got you covered.</Text>
             </Box>
             <Box className={styles.HomePageImageCard}>
              <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-3.svg" alt="image1"/>
              <Text className={styles.HomeIMageCardText}>Monitor your team’s workload, in real time</Text>
              <Text className={styles.HomeImagecardTextPara}>See every work in progress and measure the productivity of your team by monitoring them in real time</Text>
             </Box>
         </Flex> 
           
          <Heading fontSize="25px" color="purple" margin="20px 0 20px 0">Companies of all shapes and sizes use TrackingTime:</Heading> 
{/* //space after triple card */}
    <Box className={styles.homePageWordIconSpace}>
      <Image  src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/grupo.svg" alt="icon" />
    </Box>

    <Flex className={styles.miniCards}>
      <Box className={styles.homePageMini4Card} >
        <Image className={styles.homeMiniCardImage} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-1.svg" alt="icon" />
        <Text className={styles.MinicardTagLine} > Timecards Approval </Text>
        <Text className={styles.homeMiniCardPara}>Track clock in and out times with no effort.</Text>
      </Box>
      <Box className={styles.homePageMini4Card} >
        <Image className={styles.homeMiniCardImage} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-2.svg" alt="icon" />
        <Text className={styles.MinicardTagLine} > Budgeting </Text>
        <Text className={styles.homeMiniCardPara}>Keep your projects on time and budget.</Text>
      </Box>
      <Box className={styles.homePageMini4Card} >
        <Image className={styles.homeMiniCardImage} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-3.svg" alt="icon" />
        <Text className={styles.MinicardTagLine} > Work Schedules </Text>
        <Text className={styles.homeMiniCardPara}>Specify when your employees are expected to be at their job.</Text>
      </Box>
      <Box className={styles.homePageMini4Card} >
        <Image className={styles.homeMiniCardImage} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-4.svg" alt="icon" />
        <Text className={styles.MinicardTagLine} > Timesheet Audits</Text>
        <Text className={styles.homeMiniCardPara}>Avoid data inconsistencies with just one click.</Text>
      </Box>
    </Flex>

     <Box className={styles.getStartedSignUpBox}>
          <Image className={styles.GetStartSInup} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/footer/tt.svg" alt="icon" />
          <Heading color="purple" >Get Started</Heading>
          <Text className={styles.GetStartedHeading}>Sign up today and join thousands of people around the world using TrackingTime to make the most of their time.</Text>
         
          <Flex textAlign="center" >

              <Input
                borderColor="purple"
                 color="purple"
                  width="19rem"
                  // marginRight="1rem"
                  // marginLeft="20rem"
              className={styles.signInFreeFormInput}
              placeholder="Your Work Email"  />

              <Button
              className={styles.signInFreeFormBtn} 
              // height="2.6rem"
              // width="15rem"
              color={["white", "primary.500", "white", "blwhiteack"]}
              bg={["purple", "purple", "primary.500", "primary.500"]}
              _hover={{
                  color:"black",
              bg: ["white", "#805AD5", "white", "primary.600"]
              }} 
              >
              START FOR FREE!
              </Button>
          </Flex>  
          <Flex 
                   className={styles.signInFreeFormGoogle} 
                rounded="lg"
                          >
                    
                        
                            <Image 
                            
                            boxSize='28px'
                                objectFit='cover'
                                marginRight="1rem"
                                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
                                    alt="google icon" />

                            <Text
                              className={styles.signInFreeFormGoogleText} 
                              _hover={{
                                color: ["purple", "#805AD5", "purple", "primary.600"],
                                textDecoration: "underline"
                            }} 
                            >Sign in with Google</Text>
                </Flex>
                 

     </Box>
     <Box className={styles.FooterBox}>
      <Footer/>
     </Box>

       </Container>
    )
}


