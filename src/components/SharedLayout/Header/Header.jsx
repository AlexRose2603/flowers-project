import { useEffect, useState } from "react";

import { Icon } from "../../../utiles/Icon/Icon";
import { Cart, Title, Wrapper } from "./Header.styled";
import { Burger } from "../Burger/Burger";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTest, setIsTest] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      return setIsTest(false);
    }
    return setIsTest(true);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* test1={isTest} */}
      <Wrapper>
        {isOpen ? (
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
        ) : (
          <div onClick={toggleMenu}>
            <Icon
              iconName={"icon-mob-menu"}
              // width={"24px"}
              // height={"24px"}
              stroke={"#43FFD2"}
              fill={"#43FFD2"}
            />
          </div>
        )}

        <Title>
          LOVER <br />
          FLOWER
        </Title>
        <Cart>
          <Icon
            iconName={"icon-korzina"}
            width={"18px"}
            height={"16px"}
            stroke={"#ffffff"}
            fill={"#ffffff"}
          />
          <div></div>
        </Cart>
      </Wrapper>
    </>
  );
};

export default Header;
