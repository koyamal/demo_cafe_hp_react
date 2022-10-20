import { Box, Center, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const TopPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <Wrap>
        <WrapItem>
          <Box w="360px" h="360px">
            <Image
              boxSize="360px"
              src="https://source.unsplash.com/zlABb6Gke24"
            />
          </Box>
        </WrapItem>
        <WrapItem>
          <Box w="360px" h="360px" textAlign="center">
            <Box pt={20}>
              <Text fontSize="lg" fontWeight="bold">
                店主こだわりの空間
              </Text>
              <Text>
                こだわりの空間でリラックスしたひと時を
                <br />
                お過ごしください
              </Text>
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
});
