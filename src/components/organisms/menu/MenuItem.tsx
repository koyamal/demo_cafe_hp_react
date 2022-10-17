import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { VFC } from "react";

import { Menu } from "../../../types/menu/menu";

export const MenuItem: VFC<Menu> = (props) => {
  const { imageUrl, name, price } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="white"
        w="260px"
        h="260px"
        shadow="md"
        _hover={{ opacity: 0.8, cursor: "pointer" }}
        onClick={onOpen}
      >
        <Stack textAlign="center">
          <Image boxSize="180px" src={imageUrl} m="auto" />
          <Text>{name}</Text>
          <Text>{`¥${price}`}</Text>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TEST</ModalHeader>
          <ModalCloseButton />
          <ModalBody>test</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
