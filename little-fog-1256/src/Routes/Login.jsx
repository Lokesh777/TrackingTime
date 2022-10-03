import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    FormControl,
   
    Image,
    Input,
  
    Text
  } from "@chakra-ui/react";
  import { useState } from "react";
  import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  } from "firebase/auth";
  import { auth } from "../Firebase";
  import { useNavigate } from "react-router-dom";
  import styles from "../AllStyle/Login.module.css"
import { IoLogoApple, IoLogoFacebook, IoLogoGoogle } from "react-icons/io";
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navig = useNavigate();
    const [move, setMove] = useState(false);
  
    const handleSignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          navig("/");
        })
        .catch((err) => console.error(err));
      // setMove(true);
    };
  
    const handleRegister = () => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          navig("/");
        })
        .catch((err) => console.error(err));
      // setMove(false);
    };
    return (
        <Box>
            <Flex className={styles.Login_mainDivBox} >
                <Box backgroundImage={"https://pro.trackingtime.co/img/ui-login-background.svg"} className={styles.Login_mainDivBoxFirst} >
                    <Image  className={styles.Login_mainDivBoxImage} src="https://pro.trackingtime.co/img/ui-login-background.svg" alt="ImageData"  /> 
                    {/* <Image className={styles.Login_mainDivBoxImage} src="https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=740&t=st=1664442628~exp=1664443228~hmac=fa5f6e24587fa48bb8840c68fc2f5033e92eb11db74747a5321b3106d20b578b" alt="ImageData"  />  */}
                </Box>
                <Box className={styles.Login_mainDivBoxLogIn}>
                    
                    <Container
                    // p={10}
                   
                    >

                            <FormControl>
                                <Image className={styles.mainDivBoxLogInLogo} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg" alt="Logo" />
                          <br /> 
                                <Button  className={styles.loginDivLogoBtn} ><IoLogoGoogle />  Sign In with Google</Button> 
                           <br />     <Button className={styles.loginDivLogoBtn} ><IoLogoApple  />   Sign In with Apple</Button> 
                          <br />      <Button className={styles.loginDivLogoBtn} ><IoLogoFacebook /> Sign In with Facebook</Button> 
                                
                                <Text 
                                className={styles.loginDivFormName}
                                    // variant="h2"
                                // fontWeight="700" fontSize="30px"
                                >
                                {!move ? "Sign in with your Email" : "Sign up with your Email"}
                                </Text>
                    
                                {/* <FormLabel>E-Mail</FormLabel> */}
                                <Input
                                className={styles.loginDivLogoBtn}
                                type="email"
                                width="70%"
                                borderColor="purple.700"
                                value={email}
                                placeholder="Enter your Email Address "
                                onChange={(e) => setEmail(e.target.value)}
                                />
                    
                                <Divider />
                    
                                {/* <FormLabel>Password</FormLabel> */}
                                <Input
                                className={styles.loginDivLogoBtn}
                                width="70%"
                                type="password"
                                color="purple.900"
                                borderColor="purple.700"
                                value={password}
                                placeholder="Enter your password" 
                                onChange={(e) => setPassword(e.target.value)}
                                />
                    
                               
                                
                                {!move ? (
                                <Box>
                                    <Button onClick={handleSignIn}
                                     color="white" backgroundColor="purple"
                                    className={styles.loginDivLogoBtnSubmit}
                                    //  colorScheme="teal" variant="solid"
                                    
                                     >
                                   LOGIN
                                    </Button>
                                    <Flex
                                      className={styles.loginSwtichMode}
                                    query="SIGN UP"
                                    styles={{
                                        px: "1",
                                        py: "1",
                                        color: "purple",
                                        textDecoration: "underline"
                                    }}
                                    >
                                    Don’t have an account? 
                                    <Text    fontWeight="800"   marginLeft=".5rem" color="purple" onClick={() => setMove(true)}>SIGN UP</Text>
                                    </Flex>
                                </Box>
                                ) : (
                                <Box>
                                    {" "}
                                    <Button
                                      className={styles.loginDivLogoBtnSubmit}
                                    onClick={handleRegister}
                                    backgroundColor="purple"
                                    colorScheme="purple"
                                    // variant="solid"
                                    >
                                    SIGNUP
                                    </Button>
                                    <Flex
                                    query="SIGN UP"
                                    styles={{
                                        px: "1",
                                        py: "1",
                                        color: "blue",
                                        textDecoration: "underline"
                                        
                                    }}
                                   
                                    className={styles.loginSwtichMode}
                                    >
                                   Back to 
                                    <Text
                                    colorScheme="purple"
                                      color="purple"
                                      fontWeight="800"
                                    marginLeft=".5rem"
                                        onClick={() => {
                                        setMove(false);
                                        // navig("/login");

                                        }}
                                    >
                                        LOGIN
                                    </Text>
                                    </Flex>
                                </Box>
                                )}
                    
                                <br />
                            </FormControl>
                    </Container>
                </Box>
            </Flex>
  
        </Box>
      
    );
  }
  