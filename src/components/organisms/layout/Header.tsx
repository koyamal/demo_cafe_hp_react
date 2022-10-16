import { Flex, Heading, Link } from "@chakra-ui/react";
import { VFC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const onClickMenu = useCallback(() => {
    history.push("/menu");
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
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            Demo Demo Cafe
          </Heading>
        </Flex>
        <Link onClick={onClickMenu}>Menu</Link>
      </Flex>
    </>
  );
});
