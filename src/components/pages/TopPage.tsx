import { Image } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const TopPage: VFC = memo(() => {
  const onClick = () => {
    alert("test");
  };

  return (
    <>
      <Header />
      <Image
        boxSize=""
        src="https://source.unsplash.com/Y3AqmbmtLQI"
        onClick={onClick}
      />
    </>
  );
});
