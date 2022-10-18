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
  Table,
  TableCaption,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Tr,
  TableContainer
} from "@chakra-ui/react";

import { Menu } from "../../../types/menu/menu";
import { ShowAllergen } from "../../molecules/menu/ShowAllergen";

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
                  <TableContainer>
                    <Table variant="simple" colorScheme="orange">
                      <TableCaption placement="top" mt={-3}>
                        {`Nutrition Information of ${itemInfo.name}`}
                      </TableCaption>
                      <Tbody>
                        <Tr>
                          <Td>Calories</Td>
                          <Td isNumeric>{itemInfo.nutritions.calories}</Td>
                        </Tr>
                        <Tr>
                          <Td>Proteins</Td>
                          <Td isNumeric>{itemInfo.nutritions.proteins}</Td>
                        </Tr>
                        <Tr>
                          <Td>Fat</Td>
                          <Td isNumeric>{itemInfo.nutritions.fat}</Td>
                        </Tr>
                        <Tr>
                          <Td>Sodium</Td>
                          <Td isNumeric>{itemInfo.nutritions.sodium}</Td>
                        </Tr>
                        <Tr>
                          <Td>Carbohydrate</Td>
                          <Td isNumeric>{itemInfo.nutritions.carbohydrate}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
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
