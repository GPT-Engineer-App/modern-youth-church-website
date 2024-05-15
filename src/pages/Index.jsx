import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Box, VStack, HStack, Text, Button, IconButton, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Home = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Text fontSize="4xl" fontWeight="bold">
        Welcome to Newstart SDA Church
      </Text>
      <Text fontSize="xl">A place for youth to connect, grow, and serve.</Text>
      <HStack spacing={4}>
        <Button as={Link} to="/about" colorScheme="teal">
          About Us
        </Button>
        <Button as={Link} to="/contact" colorScheme="teal">
          Contact Us
        </Button>
        <Button as={Link} to="/watch-live" colorScheme="teal">
          Watch Live
        </Button>
        <Button as={Link} to="/events" colorScheme="teal">
          Events
        </Button>
        <Button as={Link} to="/sermons" colorScheme="teal">
          Sermons
        </Button>
      </HStack>
    </VStack>
  </Container>
);

const About = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">
        About Us
      </Text>
      <Text fontSize="lg">Newstart SDA Church is a vibrant community focused on empowering youth through faith, fellowship, and service. Our mission is to create a welcoming environment where young people can grow spiritually and make a positive impact in their communities.</Text>
      <Image src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHl8ZW58MHx8fHwxNzE1NzQwMzkzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Church Community" />
    </VStack>
  </Container>
);

const Contact = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">
        Contact Us
      </Text>
      <Text fontSize="lg">We'd love to hear from you! Reach out to us through any of the following channels:</Text>
      <Text>Email: contact@newstartsda.org</Text>
      <Text>Phone: (123) 456-7890</Text>
      <HStack spacing={4}>
        <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
        <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" />
      </HStack>
    </VStack>
  </Container>
);

const WatchLive = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">
        Watch Live
      </Text>
      <Text fontSize="lg">Join our live services every Saturday at 10 AM. Click the link below to watch live:</Text>
      <Button colorScheme="teal" size="lg">
        Watch Live
      </Button>
    </VStack>
  </Container>
);

const Events = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">
        Events
      </Text>
      <Text fontSize="lg">Stay updated with our latest events and activities. We have a variety of programs designed to engage and inspire our youth.</Text>
      <Image src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBldmVudHN8ZW58MHx8fHwxNzE1NzQwMzk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Church Events" />
    </VStack>
  </Container>
);

const Sermons = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">
        Sermons
      </Text>
      <Text fontSize="lg">Missed a sermon? No worries! You can watch all our past sermons here:</Text>
      <Button colorScheme="teal" size="lg">
        Watch Sermons
      </Button>
    </VStack>
  </Container>
);

const Index = () => {
  return (
    <Router>
      <Box bg="gray.100" minH="100vh">
        <Box bg="teal.500" color="white" py={4}>
          <Container maxW="container.md">
            <HStack justifyContent="space-between">
              <Text fontSize="2xl" fontWeight="bold">
                Newstart SDA Church
              </Text>
              <HStack spacing={4}>
                <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha">
                  Home
                </Button>
                <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">
                  About Us
                </Button>
                <Button as={Link} to="/contact" variant="ghost" colorScheme="whiteAlpha">
                  Contact Us
                </Button>
                <Button as={Link} to="/watch-live" variant="ghost" colorScheme="whiteAlpha">
                  Watch Live
                </Button>
                <Button as={Link} to="/events" variant="ghost" colorScheme="whiteAlpha">
                  Events
                </Button>
                <Button as={Link} to="/sermons" variant="ghost" colorScheme="whiteAlpha">
                  Sermons
                </Button>
              </HStack>
            </HStack>
          </Container>
        </Box>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/watch-live" element={<WatchLive />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Index;
