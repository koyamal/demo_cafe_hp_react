import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

import { MenuItem } from "../organisms/menu/MenuItem";

export const MenuPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <MenuItem
        imageUrl="https://source.unsplash.com/NZMeJsrMC8U"
        name="caffee"
        price="180"
      />
    </>
  );
});
