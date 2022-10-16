import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const InfoPage: VFC = memo(() => {
  return (
    <>
      <Header />
      Info Page
    </>
  );
});
