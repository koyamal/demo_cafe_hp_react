import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { VFC } from "react";

import { Menu } from "../../../types/menu/menu";

export const MenuItem: VFC<Menu> = (props) => {
  const { imageUrl, name, price } = props;
  const onClickShowDetail = () => {
    alert("Menu clicked");
  };
  return (
    <>
      <Box
        bg="white"
        w="260px"
        h="260px"
        shadow="md"
        _hover={{ opacity: 0.8, cursor: "pointer" }}
        onClick={onClickShowDetail}
      >
        <Stack textAlign="center">
          <Image boxSize="180px" src={imageUrl} m="auto" />
          <Text>{name}</Text>
          <Text>{`¥${price}`}</Text>
        </Stack>
      </Box>
    </>
  );
};
