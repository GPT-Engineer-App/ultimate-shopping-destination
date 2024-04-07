import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTruck, FaShoppingBasket, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <VStack spacing={8} align="center" maxW="container.lg" mx="auto">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CARTZ
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your One-Stop Online Grocery Destination for the Working Class in Belize!
        </Text>

        <HStack spacing={8}>
          <Box textAlign="center">
            <FaShoppingBasket size={48} />
            <Heading as="h3" size="lg" mt={4}>
              Wide Product Selection
            </Heading>
            <Text mt={2}>Browse a vast array of grocery items from local stores in Belize City and beyond.</Text>
          </Box>

          <Box textAlign="center">
            <FaMoneyBillWave size={48} />
            <Heading as="h3" size="lg" mt={4}>
              Price Comparison
            </Heading>
            <Text mt={2}>Compare prices from different stores to find the best deals on your favorite products.</Text>
          </Box>

          <Box textAlign="center">
            <FaTruck size={48} />
            <Heading as="h3" size="lg" mt={4}>
              Convenient Delivery
            </Heading>
            <Text mt={2}>Have your groceries delivered right to your doorstep with our efficient delivery service.</Text>
          </Box>
        </HStack>

        <Image src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Grocery Shopping" maxW="80%" mt={8} />

        <Button colorScheme="blue" size="lg" mt={8}>
          Start Shopping
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
