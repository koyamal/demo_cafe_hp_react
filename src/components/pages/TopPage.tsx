import { Box, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const TopPage: VFC = memo(() => {
  const onClick = () => {
    alert("test");
  };

  return (
    <>
      <Header />
      <Wrap>
        <WrapItem>
          <Image
            boxSize="500px"
            src="https://source.unsplash.com/zlABb6Gke24"
          />
        </WrapItem>
        <WrapItem>
          <Box fontSize="20px">
            店主こだわりの空間でゆったりとした時間を
            <br />
            お過ごしください
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
});
