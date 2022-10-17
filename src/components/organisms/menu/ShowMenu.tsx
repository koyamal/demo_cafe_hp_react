import { Wrap, WrapItem } from "@chakra-ui/react";
import { VFC } from "react";

import { MenuItem } from "./MenuItem";
import { MenuItems } from "../../../data/menu/menuItems";

export const ShowMenu: VFC = () => {
  return (
    <Wrap spacing="20px" ml={4} mt={4}>
      {MenuItems.map((menu) => {
        return (
          <WrapItem key={menu.name}>
            <MenuItem itemInfo={menu} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
