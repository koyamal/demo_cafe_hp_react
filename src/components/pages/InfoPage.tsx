import { Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const InfoPage: VFC = memo(() => {
  return (
    <>
      <Header />
      Info Page
      <Box align="center">
        <Box align="center" w="500px" h="300px" bg="white">
          <p>adress: A-B-202</p>
          <p>tel: 012-345-6789</p>
          <p>opening hours: Monday to Friday 10am to 10pm</p>
        </Box>
      </Box>
    </>
  );
});
