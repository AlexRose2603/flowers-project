import ellipse1 from "../../assets/images/404/ellipse-1.png";
import ellipse2 from "../../assets/images/404/ellipse-2.png";
import ellipse3 from "../../assets/images/404/ellipse-3.png";
import flower from "../../assets/images/404/error.png";
import fourBack from "../../assets/images/404/4-back.png";
import zeroNum from "../../assets/images/404/zeroNum.png";
import fourFront from "../../assets/images/404/4-front.png";

import {
  Addings,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  FourBack,
  FourFront,
  Handwriting,
  MainFlower,
  TextBox,
  ToMain,
  Wrapper,
  ZeroNum,
} from "./ErrorPage.styled";
import handwriting from "../../assets/images/404/loverFlower.png";

const ErrorPage = () => {
  return (
    <>
      <Wrapper>
        <MainFlower src={flower} alt="" />
        <Addings>
          <FourBack src={fourBack} alt="4" />
          <ZeroNum src={zeroNum} alt="0" />
          <FourFront src={fourFront} alt="4" />

          <Ellipse1 src={ellipse1} alt="" />
          {/* <Ellipse2 src={ellipse2} alt="" />
          <Ellipse3 src={ellipse3} alt="" /> */}
        </Addings>
        <Handwriting src={handwriting} alt="" />

        <TextBox>
          <p>ошибка 404</p>
          <p>упс...такой страницы нет</p>
          <ToMain to="/">на главную</ToMain>
        </TextBox>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
