import Footer from "../../components/Footer/Footer";
import {
  AddSection,
  Additional,
  Ball,
  BottomWriting,
  Container,
  DeliveryItem,
  Ellipse,
  EllipseCard,
  EllipseCards2,
  FirstBlock,
  GlassBox,
  InfoBox,
  InfoText,
  InlargedText,
  Item,
  LastPion,
  LeftEllipse,
  ListName,
  OptionItem,
  OptionList,
  PaymentType,
  Pion,
  Pion2,
  PionEllipse,
  PreLastEllipse,
  RightEllipse,
  Section,
  SectionList,
  SectionWrapper,
  Sign,
  SubTitle,
  Tiffany,
  Title,
  TypeList,
} from "./Delivery.styled";
import ellipse1 from "../../assets/images/Delivery/Ellipse-hero.png";
import pion1 from "../../assets/images/Delivery/pion-hero.png";
import exclamSign from "../../assets/images/Delivery/sign.png";
import ellipseCards from "../../assets/images/Delivery/Ellipse-cards.png";
import ellipseCards2 from "../../assets/images/Delivery/Ellipse-cards2.png";
import pion2 from "../../assets/images/Delivery/pion2.png";
import pionEllipse from "../../assets/images/Delivery/Ellipse-addit.png";
import preLastEllipse from "../../assets/images/Delivery/pre-lastEllipse.png";
import { LinkToMain } from "../AboutUs/AboutUs.styled";
import lastPion from "../../assets/images/Delivery/last-pion.png";
import bottomWriting from "../../assets/images/Delivery/bottom-writting.png";
import leftBottomEllipse from "../../assets/images/Delivery/last-leftEllipse.png";
import rightBottomEllipse from "../../assets/images/Delivery/right-bottomEllipse.png";
const DeliveryPayment = () => {
  return (
    <>
      <Container>
        <Ellipse src={ellipse1} alt="" />
        <LinkToMain to="/">главная/</LinkToMain>
        <Pion src={pion1} alt="" />
        <Title>
          доставка
          <span>и оплата</span>
        </Title>
        <FirstBlock>
          <Sign src={exclamSign} alt="" />

          <InfoBox>
            <SubTitle>Дорогие клиенты!</SubTitle>
            <InfoText>
              Во время пандемии (COVID-19) компания Lover Flower призывает всех
              меньше контактировать с другими людьми для защиты себя и своих
              близких. Именно поэтому мы организовали{" "}
              <span>БЕСКОНТАКТНУЮ ДОСТАВКУ</span>
            </InfoText>
          </InfoBox>
        </FirstBlock>
        <ListName>Способы оплаты:</ListName>
        <TypeList>
          <EllipseCard src={ellipseCards} alt="" />

          <PaymentType>
            <Ball></Ball>
            БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ ИЛИ ПО ССЫЛКЕ
          </PaymentType>
          <PaymentType>
            <Ball></Ball>
            НАЛИЧНЫМИ, БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ ИЛИ С РАСЧЕТНОГО СЧЕТА
            ОРГАНИЗАЦИИ
          </PaymentType>
          <PaymentType>
            <Ball></Ball>
            НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ
          </PaymentType>

          <EllipseCards2 src={ellipseCards2} alt="" />

          <PaymentType>
            <Ball></Ball>
            КРИПТОВАЛЮТОЙ
          </PaymentType>
        </TypeList>
        <Section>
          <h3>стоимость доставки:</h3>
          <SectionList>
            <Item>
              <InlargedText>Бесплатно</InlargedText> – при заказе на сумму{" "}
              <Tiffany>от 500 гривен</Tiffany>
            </Item>
            <Item>
              <InlargedText>100 гривен</InlargedText> – при заказе на сумму{" "}
              <Tiffany>менее 500 гривен</Tiffany>
            </Item>
            <Item>
              Так же вы можете забрать ваш заказ самостоятельно по адресу:{" "}
              <Tiffany>
                г. Харьков, ул. Героев Харькова д. 67, ежедневно с 10.00 до
                21.00
              </Tiffany>
            </Item>
          </SectionList>
        </Section>
        <Section>
          <h3>Условия доставки:</h3>
          <SectionList>
            <DeliveryItem>
              Доставка осуществляется по городу Харькову{" "}
              <span>в любой день</span>
            </DeliveryItem>
            <DeliveryItem>
              Возможность, сроки и стоимость доставки за пределы Харькова,
              доставки в ночное время, праздники{" "}
              <span>оговариваются с менеджером</span>
            </DeliveryItem>
          </SectionList>
        </Section>
        <AddSection>
          <PionEllipse src={pionEllipse} alt="" />
          <Pion2 src={pion2} alt="" />
          <GlassBox>
            <h3>Дополнительно:</h3>
            <Additional>
              Доставка иному лицу возможна только в случае оплаты заказа
              заказчиком. Доставка осуществляется не ранее чем через 2 часа
              после оплаты заказа, но может быть ранее, если букет есть в
              наличии либо по договорённости с менеджером.
            </Additional>
            <Additional>
              Время ожидания курьера составляет 15 минут. В случае если на
              момент доставки цветов получателя нет либо нет возможности по иным
              причинам произвести доставку (указан неточный адрес, закрытая
              входная дверь, контрольно-пропускная система и др.), мы оставляем
              за собой право по собственному выбору:
            </Additional>
            <OptionList>
              <OptionItem>оставить цветы тому, кто открыл дверь;</OptionItem>
              <OptionItem>
                {" "}
                с заказчиком согласовать повторную доставку, которая
                дополнительно оплачивается;
              </OptionItem>
              <OptionItem>
                {" "}
                отказаться от передачи цветов без возврата денежных средств.
              </OptionItem>
            </OptionList>
            <Additional>
              Если вы либо иной получатель не получили заказ, вам необходимо
              сообщить об этом менеджеру по телефону{" "}
              <span>+380 50-305-26-11</span>.
            </Additional>
            <SectionWrapper>
              <PreLastEllipse src={preLastEllipse} alt="" />
              <h3>Возврат денег:</h3>
              <Additional>
                При отказе заказчика от заказа в течение двух часов, если заказ
                ещё не начал готовиться, средства возвращаются в полном объёме.
                Если же флорист начал подготовку, то заказчик имеет право на
                возврат 50% стоимости, либо, если ещё не был оплачен, то обязан
                оплатить 50%.{" "}
              </Additional>
              <Additional>
                Цветы надлежащего качества возврату и обмену не подлежат, а если
                имеются какие-либо недостатки в цветах – возврат производится
                лишь если эти недостатки не являются природными и естественными
                изъянами растения. Возврат денежных средств производится
                незамедлительно на тот счёт, с которого произошла оплата, их же
                поступление на счёт зависит от платёжной системы.
              </Additional>
            </SectionWrapper>
          </GlassBox>

          <LastPion src={lastPion} alt="" />
          <BottomWriting src={bottomWriting} alt="" />
          <LeftEllipse src={leftBottomEllipse} alt="" />
          <RightEllipse src={rightBottomEllipse} alt="" />
        </AddSection>
      </Container>
      <Footer />
    </>
  );
};

export default DeliveryPayment;
