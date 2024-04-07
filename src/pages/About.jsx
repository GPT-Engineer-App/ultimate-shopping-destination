import React from "react";
import { Box, Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <VStack spacing={8} align="center" maxW="container.lg" mx="auto">
        <Heading as="h1" size="2xl" textAlign="center">
          About CARTZ
        </Heading>
        <Text fontSize="xl" textAlign="center">
          CARTZ is an online grocery platform designed to cater to the needs of the working class in Belize. Our mission is to provide a convenient and affordable way for people to access a wide range of grocery products from local stores in Belize City and beyond.
        </Text>
        <Text fontSize="xl" textAlign="center">
          We understand the challenges faced by the working class in terms of time constraints and limited access to quality groceries. That's why we have created a user-friendly platform that allows you to browse, compare prices, and order groceries from the comfort of your home or on-the-go.
        </Text>
        <Text fontSize="xl" textAlign="center">
          At CARTZ, we are committed to supporting local businesses and promoting economic growth in Belize. By partnering with local stores, we aim to create a sustainable ecosystem that benefits both consumers and retailers.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
