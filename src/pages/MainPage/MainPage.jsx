import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import mainHero from "../../assets/images/MainPage/hero-mob.png";
import heroMint from "../../assets/images/MainPage/hero-mint.png";
import heroPink from "../../assets/images/MainPage/hero-pink.png";
import {
  Card,
  CardList,
  CardTitle,
  CardsContainer,
  CatalogBtn,
  Container,
  Hero,
  HeroImgBox,
  HeroMint,
  HeroParagr,
  HeroPink,
  Item,
  SectionTitle,
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
            <NavLink>смотреть каталог</NavLink>
          </Card>

          <Card>
            <CardTitle>готовые букеты из сухоцветов</CardTitle>
            <CardList>
              <li>букеты</li>
              <li>для интерьера</li>
              <li>Композиции</li>
            </CardList>
            <NavLink>смотреть каталог</NavLink>
          </Card>

          <Card>
            <CardTitle>дополнительно</CardTitle>
            <CardList>
              <li>шары</li>
              <li>игрушки</li>
              <li>открытки</li>
              <li>упаковка</li>
            </CardList>
            <NavLink>смотреть каталог</NavLink>
          </Card>
        </CardsContainer>

        <div>
          <SectionTitle>Популярные букеты</SectionTitle>
          <p>Самые любимые композиции наших клиентов</p>
          <div>
            <img src="" alt="" />
            <h3>лучший день</h3>
            <p>250 грн</p>
            <button>в корзину</button>
          </div>
          <div>
            <img src="" alt="" />
            <h3>лучший день</h3>
            <p>250 грн</p>
            <button>в корзину</button>
          </div>
          <div>
            <img src="" alt="" />
            <h3>лучший день</h3>
            <p>250 грн</p>
            <button>в корзину</button>
          </div>
          <NavLink>смотреть весь каталог</NavLink>
        </div>
        <div>
          <SectionTitle>Как сделать заказ</SectionTitle>
          <div></div>
          <p>1 шаг</p>
          <p>Выберите какие цветы или подарки вы хотите купить</p>
          <p>2 шаг</p>
          <p>
            Оформите заказ, и мы отправим вам подтверждение на электронную
            почту, а так же менеджер свяжется с вами по телефону или в WhatsApp
          </p>
          <p>3 шаг</p>
          <p>
            Наши флористы бережно подойдут к созданию букета цветов в самом
            начале дня или накануне
          </p>
          <p>4 шаг</p>
          <p>
            Один из наших курьеров или партнёров доставит ваш заказ по
            указанному адресу. Мы отправим вам сообщение в Whats App как только
            заказ будет доставлен
          </p>
          <p>5 шаг</p>
          <p>
            Наслаждайтесь цветами , если вы заказали их для дома или любовью,
            которой поделились, если вы заказали для друга
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default MainPage;
