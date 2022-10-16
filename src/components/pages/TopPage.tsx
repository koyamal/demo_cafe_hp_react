import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const TopPage: VFC = memo(() => {
  return (
    <>
      <Header />
      Top page
    </>
  );
});
