import { VFC } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";

import { Menu } from "../../../types/menu/menu";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  itemInfo: Menu;
};
export const MenuItemModal: VFC<Props> = (props) => {
  const { isOpen, onClose, itemInfo } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{itemInfo.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Allergen</Tab>
                <Tab>Nutrition Information</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>wheat</p>
                </TabPanel>
                <TabPanel>
                  <p>120kcal</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

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
