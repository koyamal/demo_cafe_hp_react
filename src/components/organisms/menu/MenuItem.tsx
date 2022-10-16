import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  imageUrl: string;
  name: string;
  price: string;
};

export const MenuItem: VFC<Props> = (props) => {
  const { imageUrl, name, price } = props;
  return (
    <>
      <Box
        bg="white"
        w="260px"
        h="260px"
        shadow="md"
        _hover={{ opacity: 0.8, cursor: "pointer" }}
      >
        <Stack textAlign="center">
          <Image boxSize="180px" src={imageUrl} m="auto" />
          <Text>{name}</Text>
          <Text>{`¥${price}`}</Text>
        </Stack>
      </Box>
    </>
  );
};
