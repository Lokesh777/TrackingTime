import { Button, Center, Container, Divider, Spacer, Text} from "@chakra-ui/react";
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Logout({backToLogin}) {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  

  return (
    <div>
      <Container>
        {/* <h1>{user?.email}</h1> */}
        <Button
          onClick={() => {
            auth.signOut();
            navigate("/login");
            backToLogin();
          }}

          color="white"
          bg="purple"
          _hover={{
              color:"black",
            bg:"white"
          }}
        >
            <Text color="skyblue"  _hover={{
              color:"black"
          }} >{user?.email} </Text> 
            <Center height='30px' >
           
            </Center>
            {
                user?.email ? "LogOut" : "LogIn"
            }
              
        </Button>
        
      </Container>
    </div>
  );
}