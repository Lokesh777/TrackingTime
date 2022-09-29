import { Box, Button, Container, Flex, Image, Input, Text } from "@chakra-ui/react";
import styles from "../AllStyle/Home.module.css";

export default function HomeLandingPage (){

    return(
       <Container>
        <Box className={styles.mainLandingPage} >
            <Text className={styles.childOne} >TRACKINGTIME TIME TRACKER SOFTWARE</Text>
          <br />
            <Text className={styles.childTwo}>SET AND FORGET TIME TRACKING</Text>

            <Text className={styles.childThree}  >Bring your productivity <br />
             to the next level.</Text>
              <br />

          
                <Flex >

                    <Input
                        width="19rem"
                        marginRight="1rem"
                        marginLeft="5rem"
                    className={styles.signInFreeFormInput}
                     placeholder="Your Work Email"  />

                    <Button
                    // className={styles.signInFreeFormBtn} 
                    height="2.6rem"
                    width="15rem"
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
                            
                            boxSize='30px'
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
      
        <Box  width="max-content" >
            <Image 
     className={styles.mainLandingPageSecndBoxImage}  src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/ilus-header-2.svg" alt="time-data"/>
        </Box>


       </Container>
    )
}