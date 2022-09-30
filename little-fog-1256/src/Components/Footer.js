import { Box, Button, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList,Text } from "@chakra-ui/react"
import { IoIosArrowDown, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"
import styles from "../AllStyle/Footer.module.css"

function Footer(){
    return(
        <Container  maxW='7xl' centerContent className={styles.FooterMainContainer}  >
            <Box  >
            {/* <div id="pankajfooter"  style="margin-left:50px;"> */}
         <Flex  className={styles.footerUpperFlexBox} >
            
          <Box  className={styles.footerUpper}>
            <Heading fontSize="18px" fontWeight="600" color="purple">Industries</Heading>
            <Text>Time tracking for Graphic design</Text>
            <Text>Time tracking software for Architects</Text>
            <Text>Time tracking for Remote Workers</Text>
            <Text>Time tracking for Marketing Teams </Text>
            <Text>Time tracking for Freelancers</Text>
          </Box>

          <Box  className={styles.footerUpper}>
            <Heading fontSize="18px" fontWeight="600" color="purple">Products</Heading>
            <Text>Plans & Pricing</Text>
            <Text>Integrations</Text>
            <Text>Product Updates</Text>
            <Text>Slack Bot</Text>
            <Text>Microsoft Teams</Text>
          </Box>

          <Box  className={styles.footerUpper}>
            <Heading fontSize="18px" fontWeight="600" color="purple">Features</Heading>
            <Text>Online Timesheet For Efficient</Text>
            <Text>Companies</Text>
            <Text>Time Tracker for every business</Text>
            <Text>Reports for billing and payroll to reduce</Text>
            <Text>Administrative work</Text>
            <Text>Attendance tracker for every business</Text>
            <Text>Project Management Time Tracking </Text>
            
        </Box>

          <Box  className={styles.footerUpper}>
            <Heading fontSize="18px" fontWeight="600" color="purple">Apps</Heading>
            <Text>Web App</Text>
            <Text>Time tracker Mac</Text>
            <Text>Time Tracker for Windows</Text>
            <Text>IPhone App</Text>
            <Text>Android app</Text>
            <Text>Time Tracking for Chrome</Text>
            <Text>Time tracking for Firefox</Text>
            <Text>Time Tracking for Safari</Text>
          </Box>

          <Box  className={styles.footerUpper}>
            <Heading fontSize="18px" fontWeight="600" color="purple">Company</Heading>
            <Text>About Us</Text>
            <Text>Blog</Text>
            <Text>Media kit</Text>
            <Text>Terms of service</Text>
            <Text>Privacy Policy</Text>
            <Text>DMCA Policy</Text>
            <Text>Impressum</Text>
          </Box>
         </Flex>

     
     <Flex className={styles.bottomFooter}>
        
          <Box  className={styles.footerUpper}>
            <Heading fontSize="18px" fontWeight="600" color="purple">Help & Support</Heading>
            <Text> Help Center</Text>
            <Text>Developers</Text>
            <Text>Contact us</Text>
          </Box>

          <Box  className={styles.footerUpper}>
          
               <Menu>
                <MenuButton as={Button} rightIcon={<IoIosArrowDown />}>
                Choose Language
                </MenuButton>
                
                 <MenuList>
                    <MenuItem>English</MenuItem>
                    <MenuItem>Hindi</MenuItem>
                    <MenuItem>Mandarin</MenuItem>
                    <MenuItem>Spanish</MenuItem>
                    <MenuItem>Bengoli</MenuItem>
                </MenuList>
            </Menu>
          </Box>
        

          <Box  className={styles.footerUpper}>
            <Flex>
            <IoLogoLinkedin size={50}/>
            <IoLogoTwitter size={50} />
            <IoLogoFacebook size={50} />
            </Flex>
            <Flex>
                 <Text fontSize="20px" color={"blue"}>Support@tractteam.com</Text>
            </Flex>
           
            
           
          </Box>
    {/* </div> */}
        
     </Flex>


            </Box>

        </Container>
    )
}

export default Footer