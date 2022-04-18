import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Experience = () => {
  return (
    <Box
      borderTop={"1px solid black"}
      mt={30}
      pt={30}
      mh={"30vh"}
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
      <VStack>
        <Text
          fontSize={"40px"}
          fontFamily={" Orbitron, sans-serif"}
          fontWeight={"bolder"}
          my={8}
          sx={{
            "@media (max-width:1350px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          Experience
        </Text>
        <Text fontFamily={"'Ubuntu', sans-serif;"} fontSize={"20px"} my={8}>
          Company : APTECH Educational Center
        </Text>
        <Text fontSize={"20px"} my={8}>
          Position : Frontend Developer
        </Text>
        <Text fontSize={"20px"} w={"100%"} mx={2} px={1}>
          Main Tasks : Developing the UI/UX for the users.
        </Text>

        <Text fontSize={"20px"}>Time worked : 2021-date</Text>
      </VStack>
    </Box>
  );
};

export default Experience;
