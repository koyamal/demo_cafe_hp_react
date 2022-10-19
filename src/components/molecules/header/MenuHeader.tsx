/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure
} from "@chakra-ui/react";
import { useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

export const MenuHeader: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const onClickMenuPage = useCallback(() => {
    history.push("/menu");
  }, []);

  return (
    <Menu autoSelect={false} isOpen={isOpen}>
      <MenuButton
        bg="orange.900"
        _expanded={{ bg: "orange.700" }}
        _focus={{ boxShadow: "none" }}
        as={Button}
        _hover={{ bg: "orange.600", isOpen: "true" }}
        onMouseEnter={() => {
          onOpen();
        }}
        onMouseLeave={() => {
          onClose();
        }}
      >
        Menu
      </MenuButton>
      <MenuList
        mt={-2}
        border="none"
        bg="orange.900"
        onMouseEnter={() => {
          onOpen();
        }}
        onMouseLeave={() => {
          onClose();
        }}
      >
        <MenuItem _hover={{ bg: "orange.700" }} onClick={onClickMenuPage}>
          All
        </MenuItem>
        <MenuItem _hover={{ bg: "orange.700" }} onClick={onClickMenuPage}>
          Drink
        </MenuItem>
        <MenuItem _hover={{ bg: "orange.700" }} onClick={onClickMenuPage}>
          Food
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
