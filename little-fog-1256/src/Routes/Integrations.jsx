import { Box, Container, Heading, Input, InputGroup, Text , InputRightElement, Button, Flex, Image} from "@chakra-ui/react"
import styles from "../AllStyle/Integrations.module.css"
import { VscSearch } from "react-icons/vsc";
import Footer from "../Components/Footer";

// import { useState } from "react";
import { fetchUser } from "../Reducer/action";
import { githubReducer } from "../Reducer/reducer";
// import { Heading, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useReducer } from "react";
// import ReactDOM from "react-dom";
import userList from "../Context/user"; 

const initValue = {
  isLoading: false,
  isError: false,
  data: [],
  token: ""
};

export default function Integrations(){
const [state, dispatch] = useReducer(githubReducer, initValue);
const [text, setText] = useState("");
const [users, setUsers] = useState([]);
const [search, setSearch] = useState(null);
// const [category, setCategory] = useState(null);
console.log(state);


useEffect(() => {
  getUsers(userList);
}, []);

//Simulating making api call with useEffect
const getUsers = userList => {
  setUsers(userList);
};

// const byCategory = (user, category) => {
//   if (category) {
//     return user.title === category;
//   } else return user;
// };
const bySearch = (user, search) => {
  if (search) {
    return user.title.toLowerCase().includes(search.toLowerCase());
  } else return user;
};

const filteredList = (users,  search) => {
  return users
    // .filter(user => byCategory(user, category))
    .filter(user => bySearch(user, search));
};


    return(
       <Container maxW='6xl' centerContent className={styles.IntegrationPageContainer} >
         <Box >
            <Text className={styles.IntegrationHeadingOne} >TRACKING TIME BUTTON FOR CHROME</Text>
            <Heading className={styles.IntegrationHeadingTwo}>TrackingTime Integrations</Heading>
            <Text className={styles.IntegrationHeadingThree}>TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE</Text>
            
            <Box  className={styles.IntegrationSearchBoxMainBox}>
                 <InputGroup  className={styles.IntegrationInputGrpup} 
                              bg="white" p="7" size='md' width='45rem'>
                <Input
                   onChange={e => setSearch(e.target.value)}
                  type="search"
            
                  pr='4.5rem'
                  borderColor='white'
                  className={styles.IntegrationInput}
                  width="35rem"
                  placeholder='SEARCH YOUR FAVORITE APP!'
                  />
                  <InputRightElement width='4.5rem'>
                  <Button className={styles.IntegrationInputButton} bg="white"
                   onClick={() => fetchUser(dispatch, text)}
                    >
                     <VscSearch size={30}/>
   
                  </Button>
                  </InputRightElement>
              </InputGroup>
           
             
            </Box>
    
            {state.isLoading && <h3>Something went wrong....</h3>}
      {/* {state.isError && <h3>Something went wrong....</h3>} */}
          
         </Box>
         <Box centerContent>
               <Text className={styles.IntegrationSearchBelowPara}>
                     
                     Improve your time tracking and increase your productivity with these Integrations. <br />
                     See how much time you spend on each task or project! TrackingTime's integrations make it easy to keep track of your billable and non-billable tasks by integrating with more than 30 apps. <br /><br />

                     TrackingTime can be integrated with other apps, such as project management, accounting, and customer support. Get instant timesheets and analytics with TrackingTime!
               </Text>
         </Box>
     
     
        

         <Box className={styles.appDetailsdata}>
             
           {filteredList(users, search).map(ele => (
               <Box className={styles.appDetailsDivBox} key={ele.id}>
                     <Button height="5rem" className={styles.AppIntegrationimgBtn} >
                        <Image  className={styles.AppIntegrationImage}
                    src={ele.image} alt={ele.title} />
                   
                     </Button>
                     <Heading className={styles.AppIntegrationHeading} >{ele.title}</Heading>
                    <Text className={styles.AppIntegrationDesc}>{ele.description}</Text>

               </Box>
            ))
         }

         </Box>
        
         <Box>
            <Flex>
               <Image className={styles.MobileApplictionMobile} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/phone.png" alt="MobileDesign" />
               <Box className={styles.MobileAppliction}>
                    <Heading  color="purple">Track Everywhere</Heading>
                     <Text className={styles.MobileApplictionPara}>
                       Track your time everywhere you work with our mobile apps for iOS and Android.
                     </Text>
                   <Flex>
                     <Image className={styles.MobileApplictionLogo} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/playstore.png" alt="appSTore" />
                     <Image className={styles.MobileApplictionLogo} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/apstore.png" alt="appSTore" />
                   </Flex>
               </Box>
            </Flex>
         </Box>
         
         <Box alignItems="center">
             <Footer/>    
         </Box>
    
       </Container>
    )
}