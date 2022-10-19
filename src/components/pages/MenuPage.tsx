import { memo, VFC } from "react";

import { Header } from "../organisms/layout/Header";
import { ShowMenu } from "../organisms/menu/ShowMenu";

export const MenuPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <ShowMenu typeMenu="all" />
    </>
  );
});
