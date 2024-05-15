import { Box, Text, Heading } from "@chakra-ui/react";

function Home() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Welcome to Newstart SDA Church
      </Heading>
      <Text>We are delighted to have you visit our website. Join us for worship, fellowship, and community service. Explore our website to learn more about our mission, events, and how you can get involved.</Text>
    </Box>
  );
}

export default Home;
