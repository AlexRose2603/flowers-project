import { Formik, Form } from "formik";
import * as Yup from "yup";
import Footer from "../../components/Footer/Footer";
import topLeftFl from "../../assets/images/order/top-left-flower.png";
import topRightFl from "../../assets/images/order/top-right-flower.png";
// import lowerFlower from "../../assets/images/order/lover-flower.png";
import { LinkToMain } from "../Catalog/Catalog.styled";
import {
  ContactDetails,
  Container,
  FieldInput,
  FinalPayment,
  FormItem,
  Label,
  LeftFlower,
  PaymentBtn,
  PromoBox,
  RightFlower,
  Title,
} from "./OrderPage.styled";

const orderSchema = Yup.object().shape({
  name: Yup.string().required("Введите имя"),
  phone: Yup.string().required("Введите телефон"),
  email: Yup.string().email("Invalid email").required("Это обязательное поле"),
  receiverPhone: Yup.string(),
  receiverName: Yup.string(),
  comment: Yup.string(),
  city: Yup.string().required(),
  street: Yup.string().required(),
  unit: Yup.number(),
  building: Yup.string(),
  office: Yup.string(),
  deliveryTime: Yup.number(),
  promocode: Yup.string(),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  receiverPhone: "",
  receiverName: "",
  comment: "",
  city: "",
  street: "",
  unit: "",
  building: "",
  office: "",
  deliveryTime: "",
  promocode: "",
};
const OrderPage = () => {
  return (
    <>
      <Container>
        <LeftFlower src={topLeftFl} alt="" />
        <RightFlower src={topRightFl} alt="" />
        <LinkToMain to="/">Главная / Оформление заказа</LinkToMain>
        <Title>оформление заказа</Title>
        <ContactDetails>Контактные данные</ContactDetails>
        <Formik initialValues={initialValues} validationSchema={orderSchema}>
          <Form autoComplete="off">
            <ul>
              <FormItem>
                <Label htmlFor="name">Ваше имя*</Label>
                <FieldInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Введите ваше имя"
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="phone">Ваш телефон*</Label>
                <FieldInput
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+38 (097) 777-77-77"
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="email">Ваш e-mail*</Label>
                <FieldInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Введите вашу почту"
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="receiverPhone">
                  Телефон получателя (необязательно)
                </Label>
                <FieldInput
                  type="tel"
                  id="receiverPhone"
                  name="receiverPhone"
                  placeholder="+38 (097) 777-77-77"
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="receiverName">
                  Имя получателя (необязательно)
                </Label>
                <FieldInput
                  type="text"
                  id="receiverName"
                  name="receiverName"
                  placeholder="Введите имя получателя"
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="comment">Комментарий к заказу</Label>
                <FieldInput
                  type="text"
                  id="comment"
                  name="comment"
                  placeholder="Примечания к вашему заказу"
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="city">Город*</Label>
                <FieldInput
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Введите город"
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="street">Улица*</Label>
                <FieldInput
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Введите улицу"
                />
              </FormItem>
              <FormItem>
                <Label htmlFor="promocode">Промокод</Label>
                <PromoBox>
                  <FieldInput
                    type="text"
                    id="promocode"
                    name="promocode"
                    placeholder="Промокод"
                    style={{ width: "130px" }}
                  />
                  <button type="button">Применить</button>
                </PromoBox>
              </FormItem>
            </ul>
            <FinalPayment>
              <div>
                {" "}
                <h4>Общая сумма заказа</h4>
                <p>650 UAH</p>
              </div>

              <p>Скидка = 0 UAH</p>
              <p>Доставка = 0 UAH</p>
              <PaymentBtn type="submit">К оплате</PaymentBtn>
            </FinalPayment>
          </Form>
        </Formik>
      </Container>
      <Footer />
    </>
  );
};

export default OrderPage;
