import { memo, VFC } from "react";

import { Header } from "../organisms/layout/Header";
import { MenuItem } from "../organisms/menu/MenuItem";
import { Menu } from "../../types/menu/menu";
import { Wrap, WrapItem } from "@chakra-ui/react";

export const MenuPage: VFC = memo(() => {
  const menuItems: Menu[] = [
    {
      imageUrl: "https://source.unsplash.com/NZMeJsrMC8U",
      name: "coffee",
      price: "180"
    },
    {
      imageUrl: "https://source.unsplash.com/qEcWgrTG578",
      name: "tea",
      price: "170"
    },
    {
      imageUrl: "https://source.unsplash.com/nXKWLn8y9qE",
      name: "cake",
      price: "250"
    }
  ];
  return (
    <>
      <Header />
      <Wrap spacing="20px">
        {menuItems.map((menu) => {
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
    </>
  );
});
