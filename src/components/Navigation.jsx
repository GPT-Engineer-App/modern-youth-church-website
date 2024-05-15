import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <HStack spacing="24px">
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/about">
        About
      </Button>
      <Button as={Link} to="/contact">
        Contact
      </Button>
      <Button as={Link} to="/watch-live">
        Watch Live
      </Button>
      <Button as={Link} to="/events">
        Events
      </Button>
      <Button as={Link} to="/sermons">
        Sermons
      </Button>
    </HStack>
  );
}

export default Navigation;
