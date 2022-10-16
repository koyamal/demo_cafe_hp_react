import { Box, Text, Image, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const MenuPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <Box bg="white" w="260px" h="260px" shadow="md">
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
});
