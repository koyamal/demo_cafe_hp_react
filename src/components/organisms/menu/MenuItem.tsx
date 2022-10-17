import { Box, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { VFC } from "react";

import { Menu } from "../../../types/menu/menu";
import { MenuItemModal } from "./MenuItemModal";

export const MenuItem: VFC<Menu> = (props) => {
  const { imageUrl, name, price } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="white"
        w="260px"
        h="260px"
        shadow="md"
        _hover={{ opacity: 0.8, cursor: "pointer" }}
        onClick={onOpen}
      >
        <Stack textAlign="center">
          <Image boxSize="180px" src={imageUrl} m="auto" />
          <Text>{name}</Text>
          <Text>{`¥${price}`}</Text>
        </Stack>
      </Box>
      <MenuItemModal isOpen={isOpen} onClose={onClose} itemInfo={props} />
    </>
  );
};
