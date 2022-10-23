import { Box, Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";
import { infoItems } from "../../data/info/infoItems";

export const InfoPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <Box align="center">
        <Box w="500px" h="300px" bg="white">
          {infoItems.map((item) => {
            return (
              <Flex w="400px" key={item.title} mb={4} mt={4}>
                <Box textAlign="left" w="150px">
                  {item.title}
                </Box>
                <Box>{item.value}</Box>
              </Flex>
            );
          })}
        </Box>
      </Box>
    </>
  );
});
