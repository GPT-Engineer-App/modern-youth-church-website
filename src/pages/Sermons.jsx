import { Box, Text, Heading, List, ListItem } from "@chakra-ui/react";

function Sermons() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Sermons
      </Heading>
      <List spacing={3}>
        <ListItem>Faith and Works - Pastor John Doe</ListItem>
        <ListItem>The Power of Prayer - Pastor Jane Smith</ListItem>
        <ListItem>Living a Christ-Centered Life - Pastor Michael Brown</ListItem>
      </List>
    </Box>
  );
}

export default Sermons;
