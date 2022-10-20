import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

import { ShowPicText } from "../organisms/top/ShowPicText";

export const TopPage: VFC = memo(() => {
  return (
    <>
      <Header />
      <ShowPicText />
    </>
  );
});
