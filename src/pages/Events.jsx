import { Box, Text, Heading, List, ListItem } from "@chakra-ui/react";

function Events() {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Upcoming Events
      </Heading>
      <List spacing={3}>
        <ListItem>Sunday Service - Every Sunday at 10 AM</ListItem>
        <ListItem>Bible Study - Wednesdays at 7 PM</ListItem>
        <ListItem>Youth Fellowship - Fridays at 6 PM</ListItem>
        <ListItem>Community Outreach - Last Saturday of every month</ListItem>
      </List>
    </Box>
  );
}

export default Events;
