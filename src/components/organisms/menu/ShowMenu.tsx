import { Wrap, WrapItem } from "@chakra-ui/react";
import { VFC } from "react";

import { MenuItem } from "./MenuItem";
import { MenuItems } from "../../../data/menu/menuItems";

type Props = {
  typeMenu: string;
};

export const ShowMenu: VFC<Props> = (props) => {
  const { typeMenu } = props;
  return (
    <Wrap spacing="20px" ml={4} mt={4}>
      {MenuItems.map((menu) => {
        if (typeMenu === "all") {
          return (
            <WrapItem key={menu.name}>
              <MenuItem itemInfo={menu} />
            </WrapItem>
          );
        } else {
          if (menu.name === typeMenu) {
            return (
              <WrapItem key={menu.name}>
                <MenuItem itemInfo={menu} />
              </WrapItem>
            );
          } else {
            return <></>;
          }
        }
      })}
    </Wrap>
  );
};
