import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

import { MenuItem } from "../organisms/menu/MenuItem";

type Menu = { imageUrl: string; name: string; price: string };

export const MenuPage: VFC = memo(() => {
  const menuItems: Menu[] = [
    {
      imageUrl: "https://source.unsplash.com/NZMeJsrMC8U",
      name: "coffee",
      price: "180"
    },
    {
      imageUrl: "https://source.unsplash.com/NZMeJsrMC8U",
      name: "tea",
      price: "170"
    }
  ];
  return (
    <>
      <Header />
      {menuItems.map((menu) => {
        return (
          <MenuItem
            key={menu.name}
            imageUrl={menu.imageUrl}
            name={menu.name}
            price={menu.price}
          />
        );
      })}
    </>
  );
});
