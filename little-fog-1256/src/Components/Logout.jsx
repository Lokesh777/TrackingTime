import { Button, Center, Container, Divider, Text} from "@chakra-ui/react";
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
        >
            <Text color="purple" >{user?.email}</Text> 
            <Center height='30px' >
              <Divider variant="solid" orientation='vertical' />
              <Divider variant="solid" orientation='vertical' />
              <Divider variant="solid" orientation='vertical' />
              <Divider variant="solid" orientation='vertical' />
            </Center>
            {
                user?.email ? "LogOut" : "LogIn"
            }
              
        </Button>
        
      </Container>
    </div>
  );
}