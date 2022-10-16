import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/">
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
            </Flex>
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}
