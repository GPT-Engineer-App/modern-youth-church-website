import { Box, Text, Heading, VStack, Input, Textarea, Button } from "@chakra-ui/react";

function Contact() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Contact Us
      </Heading>
      <VStack spacing={4} align="stretch">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="blue">Send Message</Button>
      </VStack>
    </Box>
  );
}

export default Contact;
