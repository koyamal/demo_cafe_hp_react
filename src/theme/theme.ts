import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    styles: {
      global: {
        body: {
          backgroundColor: "orange.50",
          color: "gray.800"
        }
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: "orange",
    components: ["Tabs", "Menu"]
  })
);

export default theme;
