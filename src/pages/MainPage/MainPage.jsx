import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import mainHero from "../../assets/images/MainPage/hero-mob.png";
import heroMint from "../../assets/images/MainPage/hero-mint.png";
import heroPink from "../../assets/images/MainPage/hero-pink.png";

import {
  AddToCartBtn,
  AllCatalogLink,
  Card,
  CardList,
  CardTitle,
  CardsContainer,
  CatalogBtn,
  Container,
  Figure,
  Hero,
  HeroImgBox,
  HeroMint,
  HeroParagr,
  HeroPink,
  Item,
  SectionTitle,
  StepNumber,
  StepText,
  WatchCatalog,
} from "./MainPage.styled";

const MainPage = () => {
  return (
    <>
      <HeroImgBox>
        <HeroMint src={heroMint} alt="" />
        <HeroPink src={heroPink} alt="" />

        <Hero src={mainHero} alt="" />
      </HeroImgBox>
      <Container>
        <HeroParagr>
          Создаём для тех, кто ценит свежесть и изящество цветка
        </HeroParagr>
        <CatalogBtn>смотреть каталог</CatalogBtn>

        <SectionTitle>каталог</SectionTitle>
        <CardsContainer>
          <Card>
            <CardTitle>Цветы</CardTitle>
            <CardList>
              <Item>сборные букеты</Item>
              <Item>монобукеты</Item>
              <Item>композиции из цветов</Item>
              <Item>розы</Item>
              <Item>свадебные</Item>
            </CardList>
            <WatchCatalog>смотреть каталог</WatchCatalog>
          </Card>

          <Card>
            <CardTitle>готовые букеты из сухоцветов</CardTitle>
            <CardList>
              <Item>букеты</Item>
              <Item>для интерьера</Item>
              <Item>Композиции</Item>
            </CardList>
            <WatchCatalog>смотреть каталог</WatchCatalog>
          </Card>

          <Card>
            <CardTitle>дополнительно</CardTitle>
            <CardList>
              <Item>шары</Item>
              <Item>игрушки</Item>
              <Item>открытки</Item>
              <Item>упаковка</Item>
            </CardList>
            <WatchCatalog>смотреть каталог</WatchCatalog>
          </Card>
        </CardsContainer>

        <div>
          <SectionTitle>Популярные букеты</SectionTitle>
          <p>Самые любимые композиции наших клиентов</p>
          <div>
            <img src="" alt="" />
            <h3>лучший день</h3>
            <p>250 грн</p>
            <AddToCartBtn type="button">в корзину</AddToCartBtn>
          </div>
          <div>
            <img src="" alt="" />
            <h3>лучший день</h3>
            <p>250 грн</p>
            <AddToCartBtn>в корзину</AddToCartBtn>
          </div>
          <div>
            <img src="" alt="" />
            <h3>лучший день</h3>
            <p>250 грн</p>
            <AddToCartBtn>в корзину</AddToCartBtn>
          </div>
          <AllCatalogLink>смотреть весь каталог</AllCatalogLink>
        </div>
        <div>
          <SectionTitle>Как сделать заказ</SectionTitle>
          <Figure></Figure>
          <StepNumber>1 шаг</StepNumber>
          <StepText>Выберите какие цветы или подарки вы хотите купить</StepText>
          <StepNumber>2 шаг</StepNumber>
          <StepText>
            Оформите заказ, и мы отправим вам подтверждение на электронную
            почту, а так же менеджер свяжется с вами по телефону или в WhatsApp
          </StepText>
          <StepNumber>3 шаг</StepNumber>
          <StepText>
            Наши флористы бережно подойдут к созданию букета цветов в самом
            начале дня или накануне
          </StepText>
          <StepNumber>4 шаг</StepNumber>
          <StepText>
            Один из наших курьеров или партнёров доставит ваш заказ по
            указанному адресу. Мы отправим вам сообщение в Whats App как только
            заказ будет доставлен
          </StepText>
          <StepNumber>5 шаг</StepNumber>
          <StepText>
            Наслаждайтесь цветами, если вы заказали их для дома или любовью,
            которой поделились, если вы заказали для друга
          </StepText>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default MainPage;
