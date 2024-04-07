import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTruck, FaChartBar, FaBell } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box bg={bgColor} minH="100vh" py={12}>
      <VStack spacing={8} align="center" maxW="container.lg" mx="auto">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CARTZ
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your Ultimate Shopping Destination! Track Your Deliveries, Monitor Analytics, and Stay Informed with Real-Time Notifications.
        </Text>

        <HStack spacing={8}>
          <Box textAlign="center">
            <FaTruck size={48} />
            <Heading as="h3" size="lg" mt={4}>
              Track Deliveries
            </Heading>
            <Text mt={2}>Easily track the status of your deliveries in real-time, from the moment you place your order to its arrival at your doorstep.</Text>
          </Box>

          <Box textAlign="center">
            <FaChartBar size={48} />
            <Heading as="h3" size="lg" mt={4}>
              Monitor Analytics
            </Heading>
            <Text mt={2}>Gain invaluable insights into your shopping habits with our comprehensive analytics tools.</Text>
          </Box>

          <Box textAlign="center">
            <FaBell size={48} />
            <Heading as="h3" size="lg" mt={4}>
              Stay Informed
            </Heading>
            <Text mt={2}>Never miss a beat with our proactive notification system. Receive instant alerts whenever an order is received.</Text>
          </Box>
        </HStack>

        <Image src="https://images.unsplash.com/photo-1596892003083-4280deaf4275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3MTI0NTY0MzN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Online Shopping" maxW="80%" mt={8} />

        <Button colorScheme="blue" size="lg" mt={8}>
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
