import { Box, Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const InfoPage: VFC = memo(() => {
  const infoItems = [
    { title: "Address", value: "A-B-C-202" },
    { title: "Tel", value: "012-345-6789" },
    { title: "opening hours", value: "Monday to Friday 10am to 10pm" }
  ];
  return (
    <>
      <Header />
      <Box align="center">
        <Box w="500px" h="300px" bg="white">
          {infoItems.map((item) => {
            return (
              <Flex w="400px" key={item.title}>
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
