import { Box, Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const InfoPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <Box align="center">
        <Box w="500px" h="300px" bg="white">
          <Flex w="400px">
            <Box textAlign="left" w="150px">
              Address
            </Box>
            <Box>A-B-C-202</Box>
          </Flex>
          <Flex w="400px">
            <Box textAlign="left" w="150px">
              Tel
            </Box>
            <Box>012-345-6789</Box>
          </Flex>
          <Flex w="400px">
            <Box textAlign="left" w="150px">
              opening hours
            </Box>
            <Box>Monday to Friday 10am to 10pm</Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
});
