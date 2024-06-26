import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Container, HStack, Text, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import WatchLive from "./pages/WatchLive.jsx";
import Events from "./pages/Events.jsx";
import Sermons from "./pages/Sermons.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Box bg="brand.900" color="white" p={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Newstart SDA Church
        </Heading>
      </Box>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/watch-live" element={<WatchLive />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
      </Routes>
    </Router>
  );
}

export default App;
