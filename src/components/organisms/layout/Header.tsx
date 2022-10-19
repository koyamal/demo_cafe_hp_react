/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { VFC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const onClickTopPage = useCallback(() => {
    history.push("/");
  }, []);
  const onClickMenuPage = useCallback(() => {
    history.push("/menu");
  }, []);
  const onClickInfoPage = useCallback(() => {
    history.push("/info");
  }, []);

  return (
    <>
      <Flex
        as="nav"
        bg="orange.900"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickTopPage}
          >
            Demo Demo Cafe
          </Heading>
        </Flex>
        <Menu autoSelect={false}>
          <MenuButton
            bg="orange.900"
            _expanded={{ bg: "orange.700" }}
            _focus={{ boxShadow: "none" }}
            as={Button}
            _hover={{ bg: "orange.600" }}
          >
            Menu
          </MenuButton>
          <MenuList bg="orange.900">
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
        <Link onClick={onClickInfoPage}>Info</Link>
      </Flex>
    </>
  );
});
