/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex, Heading } from "@chakra-ui/react";
import { VFC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { MenuHeader } from "../../molecules/header/MenuHeader";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const onClickTopPage = useCallback(() => {
    history.push("/");
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
        <Flex flexGrow={2}>
          <MenuHeader />
          <Button
            bg="orange.900"
            _expanded={{ bg: "orange.700" }}
            _focus={{ boxShadow: "none" }}
            as={Button}
            _hover={{ bg: "orange.600", isOpen: "true" }}
            onClick={onClickInfoPage}
            ml={4}
          >
            Info
          </Button>
        </Flex>
      </Flex>
    </>
  );
});
