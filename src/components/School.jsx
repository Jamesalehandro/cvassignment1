import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const School = () => {
  return (
    <Box
      mt={20}
      h={"30vh"}
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        "@media (max-width:1350px)": {
          mt: 50,
          pt: 30,
          pb: 20,
        },
      }}
    >
      <VStack justifyContent={"center"} alignItems={"center"}>
        <Text
          fontSize={"40px"}
          fontFamily={" Orbitron, sans-serif"}
          fontWeight={"bolder"}
          my={8}
          w={"100%"}
          textAlign="center"
          sx={{
            "@media (max-width:1350px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          Educational Qualification
        </Text>
        <Text fontFamily={"'Ubuntu', sans-serif;"} fontSize={"20px"} my={8}>
          School : University of Nigeria,Nsukka
        </Text>
        <Text fontSize={"20px"} my={8}>
          Course : Mass Communication
        </Text>
        <Text fontSize={"20px"}>Year Of Study : 2015-2019</Text>
      </VStack>
    </Box>
  );
};

export default School;
