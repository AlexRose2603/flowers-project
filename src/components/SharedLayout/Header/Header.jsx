import { Icon } from "../../../utiles/Icon/Icon";
import { Title, Wrapper } from "./Header.styled";

const Header = () => {
  return (
    <>
      <Wrapper>
        <div>
          <Icon
            iconName={"icon-mob-menu"}
            width={"20px"}
            height={"10px"}
            stroke={"#43FFD2"}
            fill={"#43FFD2"}
          />
        </div>
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
