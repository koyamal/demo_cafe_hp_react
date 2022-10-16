import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <>
            <Flex
              as="nav"
              bg="#319795"
              color="gray.50"
              align="center"
              justify="space-between"
              padding={{ base: 3, md: 5 }}
            >
              <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                  User Management App
                </Heading>
              </Flex>
            </Flex>
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
