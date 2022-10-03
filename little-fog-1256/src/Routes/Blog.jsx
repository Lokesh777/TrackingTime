import {  Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";

import styles from "../AllStyle/Blog.module.css";
import Footer from "../Components/Footer";

export default function Blog (){

    return(
       
  <Container className={styles.BlogContainer} centerContent>

            <Box className={styles.BlogSlideBox}  >
                <Heading className={styles.BlogSlideHeading} >TIMEKEEPING AND PRODUCTIVITY ARTICLES</Heading>
                <Image  className={styles.BlogSlideImage} src="https://trackingtime.co/wp-content/uploads/2019/12/generico-1.svg" alt="" />
                <Heading className={styles.BlogSlideHeadingTwo} >Benefits Of Integrating Time 
                Tracking Software With Your Access Control System
                </Heading>


                <Button  >READ ARTICLE</Button>
            </Box>

    
            <Box className={styles.BlogMainSecondMainDiv} >


            <Box className={styles.BlogMainSecondDiv}  >
                
                        <Box bg="purple">
                            <Box  className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Introducing Our Fresh New Look and Roadmap</Text>
                        </Box>
                
                </Box>

            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2019/12/generico-1.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                        <Box bg="#1ea6e5"> 
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >How to Use a Kanban Board to Successfully Manage Your Tasks and Projects</Text>
                        </Box>
                
                </Box>


                <Box className={styles.BlogMainSecondDiv} >
                    <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/09/generico-new.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Your Complete Guide to Employee Data Management</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
            
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >5 Effective Tips on Running a Successful Business with Remote Employees</Text>
                        </Box>
                
                </Box>




                {/* <!-- scnd line --> */}

            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/04/How-to-Streamline-Workflows-to-Skyrocket-Conversions.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Best Practices for Better Data Quality in Business Intelligence</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/04/Positive-Company-Culture-with-a-Remote-Team.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Discover the Best Online Tools for Effective Customer Communication on Sales,
                                Marketing, and Support</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/04/hybrid-work-model.svg" alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >BenProfessional Reports for Your Business</Text>
                        </Box>
                
                </Box>



                {/* <!-- third --> */}


            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv} >
                            <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >The Best Solutions for Business Intelligence That You Cannot Miss</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Automation, Machine Learning, AI and the Future of</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/09/2021-mid-year.recap_.svg" alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Improve Productivity in the Digital Workplace</Text>
                        </Box>
                        
                
                </Box>

                {/* <!-- fourth --> */}


            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/10/Remote-and-Hybrid-Team-Productivity-Hacks-1.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Team Communication for Successful International Projects</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >The Best Tools for Remote Work to Avoid Procrastination</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2019/06/9-benefits-of-using-time-cards-2.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Desktop App: The New Solution of TrackingTime</Text>
                        </Box>
                
                </Box>


                {/* <!-- fifth --> */}


            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/10/Remote-and-Hybrid-Team-Productivity-Hacks-1.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Working Remotely: Collaboration Tools for Teams</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv}>
                            <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
                                    alt="" />
                           </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                {/* <!-- sixth --> */}



            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/10/Remote-and-Hybrid-Team-Productivity-Hacks-1.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/How-time-batching-can-increase-productivity-in-4-easy-steps.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>





                {/* <!-- seventh  --> */}


            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/10/Remote-and-Hybrid-Team-Productivity-Hacks-1.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/05/Management-Practices-to-Improve-Employee-Productivity.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/desktop-app-the-new-solution-of-TrackingTime.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>


                {/* <!-- eidth --> */}




            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/09/SEO-software-market-trends.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/08/Improve-time-management.svg" alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2021/07/PM-ProductUpdate.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                {/* <!-- ninth --> */}



            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/07/Remote-Work-Trends-01.svg" alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2021/06/simple-free-productivity-tools.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/04/How-to-Streamline-Workflows-to-Skyrocket-Conversions.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                {/* <!-- tenfth --> */}



            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/desktop-app-the-new-solution-of-TrackingTime.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/Whats-new-on-TrackingTime.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                {/* <!-- elevent --> */}



            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/How-time-batching-can-increase-productivity-in-4-easy-steps.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/How-a-pharmaceutical-consulting-company-improves-project-budget-and-billing.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv} >
                            <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                {/* <!-- 12th --> */}


            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/Time-tracking-for-your-digital-agency.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                        <Box className={styles.BlogLogoImageDiv} >
                        <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2020/07/Easy-time-tracking-for-agile-business-teams.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                {/* <!-- thirteen  --> */}



            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2019/06/9-benefits-of-using-time-cards-2.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>


              
                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2022/04/Positive-Company-Culture-with-a-Remote-Team.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Discover the Best Online Tools for Effective Customer Communication on Sales,
                                Marketing, and Support</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv} >
                            <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2017/12/Manage-work-time-01.svg" alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>


                {/* <!-- 14 --> */}



            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2017/12/productivity-software-to-survive-digital-economy-1.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2017/12/Reach-your-full-potential.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage}  src="https://trackingtime.co/wp-content/uploads/2016/10/Innovative-apps.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>


                {/* <!-- 16 --> */}


            <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="purple">
                        <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2015/04/what-are-you-saying-no-to.svg"
                                    alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>




                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#9def04">
                            <Box className={styles.BlogLogoImageDiv}>
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2015/01/feared-to-do-list.svg" alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>



                <Box className={styles.BlogMainSecondDiv} >
                
                        <Box bg="#1ea6e5">
                            <Box className={styles.BlogLogoImageDiv} >
                                <Image className={styles.BlogImage} 
                                    src="https://trackingtime.co/wp-content/uploads/2013/12/Manage-To-Do-List.svg" alt="" />
                            </Box>
                        </Box>
                    <Box className={styles.BlogDescDiv} >
                            <Text className={styles.BlogDescText} >Benefits of Integrating Time Tracking Software With Your Access Control System</Text>
                        </Box>
                
                </Box>

            </Box>
            
             <Box className={styles.FooterContain}>
                <Footer/>
             </Box>


  </Container>
    )
}