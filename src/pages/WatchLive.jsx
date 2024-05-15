import { Box, Text, Heading, Button } from "@chakra-ui/react";

function WatchLive() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Watch Live
      </Heading>
      <Text>Join our live services every Sunday at 10 AM. Click the button below to watch live.</Text>
      <Button colorScheme="red" mt={4}>
        Watch Live
      </Button>
    </Box>
  );
}

export default WatchLive;
