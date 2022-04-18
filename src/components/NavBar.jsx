import React from "react";
import { Box, HStack, Text, Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bgColor={"#0EB379"}>
      <HStack
        mh={"20vh"}
        color={"white"}
        px={10}
        py={10}
        align="center"
        justify={"space-between"}
        sx={{
          "@media (max-width:1350px)": {
            flexDirection: "column",
          },
        }}
      >
        <Text
          ml={50}
          fontSize={"40px"}
          fontFamily={" Orbitron, sans-serif"}
          fontWeight={"bolder"}
          sx={{
            "@media (max-width:1350px)": {
              my: 4,
            },
          }}
        >
          CV
        </Text>
        <Flex
          w={"100%"}
          align="center"
          justify="center"
          sx={{
            "@media (max-width:1350px)": {
              flexDirection: "column",
            },
          }}
        >
          <Text
            fontFamily={"'Ubuntu', sans-serif;"}
            mr={30}
            cursor={"pointer"}
            sx={{
              "@media (max-width:1350px)": {
                my: 10,
              },
            }}
          >
            Name : Chigbo Ifeanyi James
          </Text>

          <Text
            mr={30}
            cursor={"pointer"}
            sx={{
              "@media (max-width:1350px)": {
                mb: 10,
              },
            }}
          >
            Email : Jamesalehandro@gmail.com
          </Text>

          <Text
            mr={30}
            cursor={"pointer"}
            sx={{
              "@media (max-width:1350px)": {
                mb: 10,
              },
            }}
          >
            Phone Number : 09033045078
          </Text>

          <Text
            cursor={"pointer"}
            sx={{
              "@media (max-width:1350px)": {
                mb: 10,
              },
            }}
          >
            Address : 24 Lumumba Street, New Haven Enugu
          </Text>
        </Flex>
      </HStack>
    </Box>
  );
};

export default NavBar;
