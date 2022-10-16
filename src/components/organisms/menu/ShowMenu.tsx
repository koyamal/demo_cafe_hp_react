import { Wrap, WrapItem } from "@chakra-ui/react";
import { VFC } from "react";

import { MenuItem } from "./MenuItem";
import { MenuItems } from "../../../data/menu/menuItems";

export const ShowMenu: VFC = () => {
  return (
    <Wrap spacing="20px">
      {MenuItems.map((menu) => {
        return (
          <>
            <WrapItem>
              <MenuItem
                key={menu.name}
                imageUrl={menu.imageUrl}
                name={menu.name}
                price={menu.price}
              />
            </WrapItem>
          </>
        );
      })}
    </Wrap>
  );
};