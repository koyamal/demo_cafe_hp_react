import { memo, VFC } from "react";
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
import { ShowAllergen } from "../../molecules/menu/ShowAllergen";
import { ShowNutrition } from "../../molecules/menu/ShowNutrition";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  itemInfo: Menu;
};
export const MenuItemModal: VFC<Props> = memo((props) => {
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
                  <ShowAllergen itemInfo={itemInfo} />
                </TabPanel>
                <TabPanel>
                  <ShowNutrition itemInfo={itemInfo} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
