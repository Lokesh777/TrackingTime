import { Box, Container, Heading, Input } from "@chakra-ui/react"
import styles from "../AllStyle/Integrations.module.css"

export default function Integrations(){

    return(
       <Container maxW='6xl' className={styles.IntegrationPageContainer} >
         <Box>
            <Heading>TRACKING TIME BUTTON FOR CHROME</Heading>
            <Heading>TrackingTime Integrations</Heading>
            <Heading>TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE</Heading>

            <Input p="1rem" color="black" icon='search' placeholder='SEARCH YOUR FAVORITE APP!' />

         </Box>

       </Container>
    )
}