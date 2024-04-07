import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
          CARTZ
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/about" fontWeight="medium" fontSize="lg" ml={8}>
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
