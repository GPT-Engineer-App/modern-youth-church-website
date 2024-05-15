import { Box, Text, Heading } from "@chakra-ui/react";

function About() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        About Us
      </Heading>
      <Text>Welcome to Newstart SDA Church. We are a community of believers dedicated to spreading the love and teachings of Jesus Christ. Our mission is to serve our community and provide a place of worship, fellowship, and spiritual growth.</Text>
    </Box>
  );
}

export default About;
