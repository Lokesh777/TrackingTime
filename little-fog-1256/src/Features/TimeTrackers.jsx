import { Box, Button, Container, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import styles from '../AllStyle/TimeTrackers.module.css';
// import Footer from "../Components/Footer";

export default function TimeTracker(){

    return(
       <Container>

              <Box className={styles.TimeTrackerFirstBox}>
                    
                    <Image className={styles.TimeTrackerFirstBoxImage}  src="https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg" alt="LogoGirl" />
                    <Heading className={styles.TimeTrackerFirstBoxHeadingOne}>Time Tracker for every business</Heading>

                    <Box className={styles.mainLandingPage} >
                
            
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
                                className={styles.TimeTrackerFourBoxInnerBoxButton}
                                height="2.6rem"
                                width="15rem"
                                color={["white", "primary.500", "white", "blwhiteack"]}
                                bg={["purple", "purple", "primary.500", "primary.500"]}
                                
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
      

                
                    

              </Box>
 


              <Box className={styles.TimeTrackerSecondBox}>
                        <Flex> 
                            <Image className={styles.TimeTrackerSecondBoxImage} src="https://trackingtime.co/wp-content/uploads/2020/04/freelance-feature-01.jpg" alt="OfficeMen"/>    
                             <Box className={styles.TimeTrackerSecondBoxInnerBox}>
                                <Heading className={styles.TimeTrackerSecondBoxInnerBoxHeading}>A functional time tracker</Heading>
                                <Text className={styles.TimeTrackerSecondBoxInnerBoxText}>
                                     Easy online time tracker is only the beginning. TrackingTime enables you to organize and plan your time to work smarter– Even when time is tight and pressures are high!
                                </Text>
                            </Box>

                        </Flex>
              </Box> 

              <Box className={styles.TimeTrackerThirdBox}>
                        <Flex>
                          <Box className={styles.TimeTrackerThirdBoxInnerBox}>
                                <Heading className={styles.TimeTrackerThirdBoxInnerBoxHeading}>Start tracking with just one click</Heading>
                                <Text className={styles.TimeTrackerThirdBoxInnerBoxText}>
                                Try the fastest way to start tracking your activities by simply clicking on the start button. Easily keep track of your team’s working hours with online timesheet and simplify your processes.
                                </Text>
                            </Box> 
                            <Image className={styles.TimeTrackerThirdBoxImage} src="https://trackingtime.co/wp-content/uploads/2020/08/start-tracking-ok.svg" alt="OfficeMen"/>    
                            

                        </Flex>
              </Box> 

              <Box className={styles.TimeTrackerSecondBox}>
                        <Flex> 
                            <Image className={styles.TimeTrackerSecondBoxImage} src="https://trackingtime.co/wp-content/uploads/2020/04/landing-remote-teams-ind-RemoteTeams-feature05@2x-585x400.png" alt="OfficeMen"/>    
                             <Box className={styles.TimeTrackerSecondBoxInnerBox}>
                                <Heading className={styles.TimeTrackerSecondBoxInnerBoxHeading}>Track Time in real-time</Heading>
                                <Text className={styles.TimeTrackerSecondBoxInnerBoxText}>
                                Today, work happens everywhere. That’s why our time tracker software allows you and your team to track time in real-time wherever you work. Set due dates to organize and prioritize your projects and tasks and automatically sync them with your employees’ calendar. Never miss a deadline!   </Text>
                            </Box>

                        </Flex>
              </Box> 

              <Box className={styles.TimeTrackerThirdBox}>
                        <Flex>
                          <Box className={styles.TimeTrackerThirdBoxInnerBox}>
                                <Heading className={styles.TimeTrackerThirdBoxInnerBoxHeading}>Desktop App</Heading>
                                <Text className={styles.TimeTrackerThirdBoxInnerBoxText}>
                                Track your time and get an overview of tasks and projects directly from the desktop app. Log your hours easier than ever with just one click. </Text>
                            </Box> 
                            <Image className={styles.TimeTrackerThirdBoxImage} src="https://trackingtime.co/wp-content/uploads/2020/04/landing-developers-ind-Developer-Fixes@2x-585x400.png" alt="OfficeMen"/>    
                            

                        </Flex>
              </Box> 

              <Box className={styles.TimeTrackerSecondBox}>
                        <Flex> 
                            <Image className={styles.TimeTrackerSecondBoxImage} src="https://trackingtime.co/wp-content/uploads/2020/04/landing-developers-ind-Developer-feature-03.svg" alt="OfficeMen"/>    
                             <Box className={styles.TimeTrackerSecondBoxInnerBox}>
                                <Heading className={styles.TimeTrackerSecondBoxInnerBoxHeading}>Track time everywhere</Heading>
                                <Text className={styles.TimeTrackerSecondBoxInnerBoxText}>
                                Download TrackingTime for iOS and Android to track your time wherever you work. With the Chrome Button, you can even track your tasks directly in Asana, Trello, Jira, and more than 30 other project management apps.  </Text>
                            </Box>

                        </Flex>
              </Box> 

              <Box className={styles.TimeTrackerFourBoxInnerBox}>
                <Heading className={styles.TimeTrackerFourBoxInnerBoxHeading} >THE SIMPLEST TIME TRACKER TO IMPROVE YOUR PRODUCTIVITY!</Heading>
                <Button
                                className={styles.TimeTrackerFourBoxInnerBoxButton}
                                height="2.6rem"
                                width="15rem"
                                color={["white", "primary.500", "white", "blwhiteack"]}
                                bg={["purple", "purple", "primary.500", "primary.500"]}
                                
                            >
                                START FOR FREE!
                                </Button>
              </Box>

              {/* <Box>
                <Footer />
              </Box> */}

       </Container>
    )
}