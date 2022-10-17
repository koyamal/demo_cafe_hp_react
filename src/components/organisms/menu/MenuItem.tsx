import { Box, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { VFC } from "react";

import { Menu } from "../../../types/menu/menu";
import { MenuItemModal } from "./MenuItemModal";

type Props = {
  itemInfo: Menu;
};

export const MenuItem: VFC<Props> = (props) => {
  const { itemInfo } = props;
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
          <Image boxSize="180px" src={itemInfo.imageUrl} m="auto" />
          <Text>{itemInfo.name}</Text>
          <Text>{`¥${itemInfo.price}`}</Text>
        </Stack>
      </Box>
      <MenuItemModal isOpen={isOpen} onClose={onClose} itemInfo={itemInfo} />
    </>
  );
};
