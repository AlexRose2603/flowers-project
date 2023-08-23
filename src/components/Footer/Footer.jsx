import { Icon } from "../../utiles/Icon/Icon";
import Logo from "../SharedLayout/Logo/Logo";
import {
  Address,
  ContactInfo,
  ContactItem,
  Contacts,
  InfoText,
  NavList,
  NavListItem,
  SocLink,
  Socials,
  SubTitle,
  Wrapper,
} from "./Footer.styled";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <NavList>
          <NavListItem to="/catalog">Каталог</NavListItem>
          <NavListItem to="/delivery-and-payment">
            Доставка и оплата
          </NavListItem>
          <NavListItem to="/about-us">О нас</NavListItem>
          <NavListItem to="/faq">FAQ</NavListItem>
          <NavListItem to="/contacts">Контакты</NavListItem>
          <NavListItem to="/corporative-clients">
            Для корпоративных клиентов
          </NavListItem>
        </NavList>
        <Contacts>
          <ContactItem>
            <ContactInfo>zakaz@loverflower.by</ContactInfo>
            <InfoText>Доставка 24/7 по договоренности с оператором</InfoText>
          </ContactItem>
          <ContactItem>
            <ContactInfo>ул. Героев Харькова, 18</ContactInfo>
            <InfoText>10:00 до 21:00 без выходных</InfoText>
          </ContactItem>
          <ContactItem>
            <ContactInfo>+380 (50) 305-26-11</ContactInfo>
            <InfoText>прием звонков круглосуточно</InfoText>
          </ContactItem>
        </Contacts>
        <Socials>
          <SocLink>
            <Icon
              iconName={"icon-soc1"}
              width={"24px"}
              height={"24px"}
              stroke={"#ffffff"}
              fill={"#ffffff"}
            />
          </SocLink>
          <SocLink>
            <Icon
              iconName={"icon-whatsapp"}
              width={"24px"}
              height={"24px"}
              stroke={"#ffffff"}
              fill={"#ffffff"}
            />
          </SocLink>
          <SocLink>
            <Icon
              iconName={"icon-call"}
              width={"24px"}
              height={"24px"}
              stroke={"#ffffff"}
              fill={"#ffffff"}
            />
          </SocLink>
        </Socials>
        <SubTitle>реквизиты</SubTitle>
        <Address>
          ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева
          д. 67, комн. 112 (пом.11) УНП 193263781, р/с
          BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г.
          Минск, улица Толстого
        </Address>
      </Wrapper>
    </>
  );
};
export default Footer;
