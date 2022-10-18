import { HStack, Tag } from "@chakra-ui/react";
import { VFC } from "react";

import { Menu } from "../../types/menu/menu";

type Props = {
  itemInfo: Menu;
};

export const ShowAllergen: VFC<Props> = (prpos) => {
  const { itemInfo } = prpos;
  return (
    <HStack spacing={2}>
      {itemInfo.allergens.length !== 0 ? (
        itemInfo.allergens.map((allergen) => (
          <Tag key={allergen} colorScheme="orange">
            {allergen}
          </Tag>
        ))
      ) : (
        <>None</>
      )}
    </HStack>
  );
};
