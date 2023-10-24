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
        </Socials>
        <SubTitle>реквизиты</SubTitle>
        <Address>
          ООО «Ловерфлауер» 220035, Украина, г. Харьков, проспект Героев
          Харькова, 54, УНП 193596781, р/с BY55MTBK30120001093300096372 ЗАО
          «ПриватБанк», БИК MTBKBY22 330007, г. Харьков, проспект Героев
          Харькова
        </Address>
      </Wrapper>
    </>
  );
};
export default Footer;
