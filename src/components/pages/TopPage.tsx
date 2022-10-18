import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../organisms/layout/Header";

export const TopPage: VFC = memo(() => {
  const onClick = () => {
    alert("test");
  };
  const history = useHistory();
  const onClickMenuPage = useCallback(() => {
    history.push("/menu");
  }, []);
  return (
    <>
      <Header />
      <Image
        boxSize=""
        src="https://source.unsplash.com/Y3AqmbmtLQI"
        onClick={onClick}
      />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onClickMenuPage}>All</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
});
