import PropTypes from "prop-types";
import { Icon } from "../../../utiles/Icon/Icon";
import {
  AddressList,
  BurgerBar,
  BurgerLogo,
  BurgerWrapper,
  CloseIcon,
  Info,
  Item,
  LetterF,
  LetterL,
  Line,
  LinkItem,
  MenuList,
  MenuListItem,
  Phone,
  SearchLinkItem,
  SocList,
  SomeInfo,
  Timing,
} from "./Burger.styled";
import { SocLink } from "../../Footer/Footer.styled";

export const Burger = ({ toggleMenu }) => {
  return (
    <>
      <BurgerWrapper>
        <BurgerBar>
          <BurgerLogo>
            <LetterL>L</LetterL>
            <LetterF>F</LetterF>
          </BurgerLogo>
          <CloseIcon onClick={toggleMenu}>
            <Icon
              iconName={"icon-close-cross"}
              width={"24px"}
              height={"24px"}
              stroke={"#43FFD2"}
              fill={"#43FFD2"}
            />
          </CloseIcon>
        </BurgerBar>
        <MenuList>
          <MenuListItem>
            <SearchLinkItem>
              <Icon
                iconName={"icon-search"}
                width={"18px"}
                height={"18px"}
                stroke={"#ffffff"}
                fill={"#ffffff"}
              />
              <p>поиск</p>
            </SearchLinkItem>
          </MenuListItem>
          <MenuListItem>
            <LinkItem to="/" onClick={toggleMenu}>
              главная
            </LinkItem>
          </MenuListItem>
          <MenuListItem>
            <LinkItem to="/catalog" onClick={toggleMenu}>
              каталог
            </LinkItem>
          </MenuListItem>
          <MenuListItem>
            <LinkItem to="/delivery-and-payment" onClick={toggleMenu}>
              доставка и оплата
            </LinkItem>
          </MenuListItem>
          <MenuListItem>
            <LinkItem to="/about-us" onClick={toggleMenu}>
              о нас
            </LinkItem>
          </MenuListItem>
          <MenuListItem>
            <LinkItem to="/contacts" onClick={toggleMenu}>
              контакты
            </LinkItem>
          </MenuListItem>
          <MenuListItem>
            <LinkItem to="/faq" onClick={toggleMenu}>
              faq
            </LinkItem>
          </MenuListItem>
          <MenuListItem>
            <LinkItem to="/corporative-clients" onClick={toggleMenu}>
              для корпоративных клиентов
            </LinkItem>
          </MenuListItem>
        </MenuList>
        <Line></Line>
        <AddressList>
          <Item>
            <Info>zakaz@loverflower.by</Info>
            <Timing>Доставка 24/7 по договоренности с оператором</Timing>
          </Item>
          <Item>
            <Info>ул. Героев Харькова, 18</Info>
            <Timing>
              10:00 до 21:00 <br />
              без выходных
            </Timing>
          </Item>
        </AddressList>
        <SomeInfo>
          <p>Политика конфиденциальности</p>
          <p>Обработка персональных данных</p>
        </SomeInfo>
        <Phone href="tel:+380503052611">+380 (50) 305-26-11</Phone>
        <SocList>
          <SocLink>
            <Icon
              iconName={"icon-soc1"}
              width={"24px"}
              height={"24px"}
              stroke={""}
              fill={"#000000"}
            />
          </SocLink>
          <SocLink>
            <Icon
              iconName={"icon-whatsapp"}
              width={"24px"}
              height={"24px"}
              stroke={""}
              fill={"#000000"}
            />
          </SocLink>
          <SocLink>
            <Icon
              iconName={"icon-call"}
              width={"24px"}
              height={"24px"}
              stroke={""}
              fill={"#000000"}
            />
          </SocLink>
        </SocList>
      </BurgerWrapper>
    </>
  );
};

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
