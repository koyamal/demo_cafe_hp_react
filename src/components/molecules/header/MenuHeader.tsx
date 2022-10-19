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
  const onClickFoodPage = useCallback(() => {
    history.push("/menu/food");
  }, []);
  const onClickDrinkPage = useCallback(() => {
    history.push("/menu/drink");
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
        <MenuItem _hover={{ bg: "orange.700" }} onClick={onClickDrinkPage}>
          Drink
        </MenuItem>
        <MenuItem _hover={{ bg: "orange.700" }} onClick={onClickFoodPage}>
          Food
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
