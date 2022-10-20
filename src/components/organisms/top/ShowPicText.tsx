import { Box, Center, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { VFC } from "react";

import { topContents } from "../../molecules/top/topContents";

export const ShowPicText: VFC = () => {
  return (
    <>
      {topContents.map((content) => {
        return (
          <Center key={content.path}>
            <Wrap align="center" mb={4}>
              <WrapItem>
                <Box w="500px">
                  <Image w="500px" h="360px" src={content.path} />
                </Box>
              </WrapItem>
              <WrapItem>
                <Box w="500px" textAlign="center">
                  <Box mt={3} mb={3}>
                    {content.explanation}
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Center>
        );
      })}
    </>
  );
};
