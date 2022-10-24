import { Box, Flex, Image } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";
import { infoItems } from "../../data/info/infoItems";

export const InfoPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <Box align="center">
        <Box w="500px" h="auto" bg="white" mt={100} pt={5} pb={5}>
          {infoItems.map((item) => {
            return (
              <Flex w="400px" key={item.title} mb={10}>
                <Box textAlign="left" w="150px">
                  {item.title}
                </Box>
                <Box>{item.value}</Box>
              </Flex>
            );
          })}
          <Image
            w="400px"
            src="https://source.unsplash.com/BEF-7cpER3s"
            mt={5}
          />
        </Box>
      </Box>
    </>
  );
});
