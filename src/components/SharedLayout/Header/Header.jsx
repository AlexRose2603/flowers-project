import { useState } from "react";
import { Icon } from "../../../utiles/Icon/Icon";
import { Title, Wrapper } from "./Header.styled";
import { Burger } from "../Burger/Burger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Wrapper>
        {isOpen ? (
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
        ) : (
          <div onClick={toggleMenu}>
            <Icon
              iconName={"icon-mob-menu"}
              width={"24px"}
              height={"24px"}
              stroke={"#43FFD2"}
              fill={"#43FFD2"}
            />
          </div>
        )}

        <Title>
          LOVER <br />
          FLOWER
        </Title>
        <div>
          <Icon
            iconName={"icon-korzina"}
            width={"24px"}
            height={"24px"}
            stroke={"#ffffff"}
            fill={"#ffffff"}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
