import { Box, Center, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { VFC } from "react";

export const ShowPicText: VFC = () => {
  return (
    <>
      <Center align="center" justify="center">
        <Wrap align="center" mb={4}>
          <WrapItem>
            <Box w="500px">
              <Image
                w="500px"
                h="360px"
                src="https://source.unsplash.com/zlABb6Gke24"
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box w="500px" textAlign="center">
              <Box mt={3} mb={3}>
                <Text fontSize="lg" fontWeight="bold">
                  店主こだわりの空間
                </Text>
                <Text>
                  インテリアにこだわり作られた空間で特別なひと時を
                  <br />
                  お過ごしください
                </Text>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
      <Center>
        <Wrap align="center" mb={4}>
          <WrapItem>
            <Box w="500px">
              <Image
                w="500px"
                h="360px"
                src="https://source.unsplash.com/fegzFV9Lc4s"
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box w="500px" textAlign="center">
              <Box mt={3} mb={3}>
                <Text fontSize="lg" fontWeight="bold">
                  特製ブレンドコーヒー
                </Text>
                <Text>
                  数種類のブレンドコーヒーをご用意しております
                  <br />
                  挽きたてならではの香りを味わってください
                </Text>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Center>
    </>
  );
};
