import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { VFC } from "react";

export const MenuItem: VFC = () => {
  return (
    <>
      <Box
        bg="white"
        w="260px"
        h="260px"
        shadow="md"
        _hover={{ opacity: 0.8, cursor: "pointer" }}
      >
        <Stack textAlign="center">
          <Image
            boxSize="180px"
            src="https://source.unsplash.com/NZMeJsrMC8U"
            m="auto"
          />
          <Text>Coffee</Text>
          <Text>¥180</Text>
        </Stack>
      </Box>
    </>
  );
};
