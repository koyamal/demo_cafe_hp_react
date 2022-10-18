import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tr
} from "@chakra-ui/react";
import { VFC } from "react";

import { Menu } from "../../../types/menu/menu";

type Props = {
  itemInfo: Menu;
};

export const ShowNutrition: VFC<Props> = (props) => {
  const { itemInfo } = props;
  return (
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
  );
};
