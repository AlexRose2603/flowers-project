import Footer from "../../components/Footer/Footer";
import mainHero from "../../assets/images/MainPage/hero-mob.png";
import heroMint from "../../assets/images/MainPage/hero-mint.png";
import heroPink from "../../assets/images/MainPage/hero-pink.png";
import text from "../../assets/images/MainPage/texting.png";
import shadowHands from "../../assets/images/MainPage/hands-shadow.png";
import layer from "../../assets/images/MainPage/2layer.png";
import ellipse from "../../assets/images/MainPage/cards-ellipse.png";
import ellipse2 from "../../assets/images/MainPage/cards-pink-ellipse.png";
import bouquet1 from "../../assets/images/Store/6.jpg";
import bouquet2 from "../../assets/images/Store/9.jpg";
import bouquet3 from "../../assets/images/Store/12.jpg";
import pinkOrder from "../../assets/images/MainPage/howtoorder-pink.png";
import flowerOrder from "../../assets/images/MainPage/howtoorder-flower.png";
import mintOrder from "../../assets/images/MainPage/howtoordermint.png";
import writingOrder from "../../assets/images/MainPage/texting.png";
import leaves from "../../assets/images/MainPage/leaves.png";
import shadow from "../../assets/images/MainPage/shadow.png";
import mintLeaves from "../../assets/images/MainPage/mint-leaves.png";
import pinkLeaves from "../../assets/images/MainPage/pink-leaves.png";
import {
  AddToCartBtn,
  AllCatalogLink,
  Card,
  CardList,
  CardTitle,
  CardsContainer,
  CatalogBtn,
  CatalogList,
  CollectBouquetLink,
  Comment,
  Container,
  Ellipse,
  Ellipse2,
  Figure,
  FlowerOrder,
  Form,
  FormInput,
  FormLabel,
  FormText,
  FormTitleSection,
  GreenLine,
  Hero,
  HeroImgBox,
  HeroMint,
  HeroParagr,
  HeroPink,
  Item,
  Layer,
  Leaves,
  ListItem,
  MintLeaves,
  MintOrder,
  MyAgreement,
  OccasionItem,
  OccasionList,
  OccasionTitle,
  PartSection,
  PinkLeaves,
  PinkRight,
  SectionOrder,
  SectionTitle,
  SendBtn,
  Shadow,
  ShadowLeaves,
  StepItem,
  StepNumber,
  StepText,
  Subtitle,
  TextOffer,
  WatchCatalog,
  Writing,
  WritingOrder,
} from "./MainPage.styled";
import { Icon } from "../../utiles/Icon/Icon";

const MainPage = () => {
  return (
    <>
      <HeroImgBox>
        <HeroMint src={heroMint} alt="" />
        <HeroPink src={heroPink} alt="" />
        <Writing src={text} alt="" />
        <Hero src={mainHero} alt="" />
        <Layer src={layer} alt="" />
        <Shadow src={shadowHands} alt="" />
      </HeroImgBox>
      <Ellipse src={ellipse} alt="" />
      <Ellipse2 src={ellipse2} alt="" />
      <Container>
        <HeroParagr>
          Создаём для тех, кто ценит свежесть и изящество цветка
        </HeroParagr>
        <CatalogBtn to="/catalog">смотреть каталог</CatalogBtn>
        <PartSection>
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
        </PartSection>
        <PartSection>
          <SectionTitle>
            Популярные <span>букеты</span>
          </SectionTitle>
          <Subtitle>Самые любимые композиции наших клиентов</Subtitle>
          <CatalogList>
            <ListItem>
              <img src={bouquet1} alt="" />
              <h3>лучший день</h3>
              <p>250 грн</p>
              <AddToCartBtn type="button">в корзину</AddToCartBtn>
            </ListItem>
            <ListItem>
              <img src={bouquet2} alt="" />
              <h3>лучший день</h3>
              <p>250 грн</p>
              <AddToCartBtn>в корзину</AddToCartBtn>
            </ListItem>
            <ListItem>
              <img src={bouquet3} alt="" />
              <h3>лучший день</h3>
              <p>250 грн</p>
              <AddToCartBtn>в корзину</AddToCartBtn>
            </ListItem>
          </CatalogList>
          <AllCatalogLink to="/catalog">
            смотреть весь каталог{" "}
            <Icon
              iconName={"icon-long-desk-arrow"}
              width={"40px"}
              stroke={"#d978ac"}
              fill={"#d978ac"}
            />
          </AllCatalogLink>
          <PinkRight src={pinkOrder} alt="" />
        </PartSection>
        <PartSection>
          <FlowerOrder src={flowerOrder} alt="" />
          <SectionOrder>
            Как сделать <span>заказ</span>
          </SectionOrder>
          <ul>
            <StepItem>
              <Figure></Figure>
              <StepNumber>1 шаг</StepNumber>
              <StepText>
                Выберите какие цветы или подарки вы хотите купить
              </StepText>
            </StepItem>
            <StepItem>
              <StepNumber>2 шаг</StepNumber>
              <StepText>
                Оформите заказ, и мы отправим вам подтверждение на электронную
                почту, а так же менеджер свяжется с вами по телефону или в
                WhatsApp
              </StepText>
            </StepItem>
            <StepItem>
              <StepNumber>3 шаг</StepNumber>
              <StepText>
                Наши флористы бережно подойдут к созданию букета цветов в самом
                начале дня или накануне
              </StepText>
            </StepItem>
            <StepItem>
              <StepNumber>4 шаг</StepNumber>
              <StepText>
                Один из наших курьеров или партнёров доставит ваш заказ по
                указанному адресу. Мы отправим вам сообщение в Whats App как
                только заказ будет доставлен
              </StepText>
            </StepItem>
            <MintOrder src={mintOrder} alt="" />
            <StepItem>
              <StepNumber>5 шаг</StepNumber>
              <StepText>
                Наслаждайтесь цветами, если вы заказали их для дома или любовью,
                которой поделились, если вы заказали для друга
              </StepText>
            </StepItem>
          </ul>
          <WritingOrder src={writingOrder} alt="" />
        </PartSection>
        <PartSection>
          <OccasionTitle>
            особенный <span>повод?</span>
          </OccasionTitle>
          <TextOffer>
            Мы готовы прийти на помощь и собрать уникальный букет, на любой
            вкус, бюджет и для любого события по вашему индивидуальному заказу.
          </TextOffer>
          <OccasionList>
            <OccasionItem>учтем даже самые изысканные пожелания;</OccasionItem>
            <OccasionItem>
              подберем свежайшие цветы и сделаем уникальный букет или
              композицию;
            </OccasionItem>
            <OccasionItem>
              оплатить можно при получении или онлайн на сайте
            </OccasionItem>
          </OccasionList>
          <CollectBouquetLink>собрать индивидуальный букет</CollectBouquetLink>
        </PartSection>
        <PartSection>
          <FormTitleSection>остались вопросы?</FormTitleSection>
          <ShadowLeaves src={shadow} alt="" />
          <Leaves src={leaves} alt="" />
          <MintLeaves src={mintLeaves} alt="" />
          <PinkLeaves src={pinkLeaves} alt="" />
          <GreenLine></GreenLine>
          <FormText>
            Отправьте ваш вопрос, заказ, предложение или жалобу через форму
            обратной связи, и наш специалист свяжется с вами в течение 15 минут.
          </FormText>
          <Form>
            <FormLabel htmlFor="text">
              <FormInput
                type="text"
                name="text"
                id="text"
                placeholder="ВАШЕ ИМЯ"
              />
            </FormLabel>
            <FormLabel htmlFor="tel">
              <FormInput
                type="tel"
                name="tel"
                id="tel"
                placeholder="+3 (805) 111-11-11"
              />
            </FormLabel>
            <FormLabel htmlFor="comment"></FormLabel>
            <Comment
              name="comment"
              id="comment"
              rows="6"
              placeholder="ВАШ КОММЕНТАРИЙ"
            ></Comment>
            <SendBtn type="submit">отправить</SendBtn>
          </Form>
          <MyAgreement>
            Нажимая на кнопку «Отправить», я даю свое согласие на обработку
            персональных данных, в соответствии с{" "}
            <span>Политикой конфиденциальности</span>
          </MyAgreement>
        </PartSection>
      </Container>

      <Footer />
    </>
  );
};
export default MainPage;
