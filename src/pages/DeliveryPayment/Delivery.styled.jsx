import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
`;
export const Ellipse = styled.img`
  position: absolute;
  margin-left: -10px;
`;

export const Pion = styled.img`
  position: absolute;
  right: 0%;
  top: 13%;
  height: 150px;
  width: 130px;
`;

export const Sign = styled.img`
  width: 20px;
  height: 65px;
  padding-left: 5px;
`;

export const EllipseCard = styled.img`
  position: absolute;
  transform: rotate(-71.86deg);
  transform-origin: 0 0;
  background: #6b535f;
  box-shadow: 10px 10px 20px;
  border-radius: 9999px;
  filter: blur(90px);
  top: 230px;
  left: 40px;
  width: 275px;
  height: 220px;
`;

export const Pion2 = styled.img`
  position: absolute;
  z-index: -1;
  width: 70%;
  left: -4%;
  top: -19%;
`;
export const EllipseCards2 = styled.img`
  position: absolute;
  transform: rotate(-71.86deg);
  transform-origin: 0 0;
  background: #6b535f;
  border-radius: 9999px;
  filter: blur(100px);
  width: 395px;
  height: 220px;
  top: 800px;
  left: -10%;
`;
export const PionEllipse = styled.img`
  position: absolute;
  left: -4%;
  top: -45%;
  z-index: -2;
`;

export const PreLastEllipse = styled.img`
  position: absolute;
  right: -10%;
  top: 14%;
  z-index: -1;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-bottom: 53px;
  position: relative;
  z-index: 5;
  span {
    display: inline-flex;
    margin-left: 50px;
    @media screen and (min-width: 498px) {
      margin-left: 12px;
    }
  }
`;

export const SubTitle = styled.h3`
  color: #d978ac;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const InfoBox = styled.div`
  padding-left: 20px;
  margin-bottom: 60px;
`;

export const FirstBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const InfoText = styled.p`
  max-width: 500px;
  line-height: 22px;

  span {
    color: #43ffd2;
  }
`;
export const ListName = styled.h3`
  text-align: center;
  color: #d978ac;
  margin-bottom: 20px;
`;
export const TypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
  position: relative;
  z-index: 10;
`;

export const PaymentType = styled.li`
  text-align: center;
  width: 197px;
  height: 195px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  line-height: 26px;
  letter-spacing: 0.28px;
  position: relative;
  z-index: 10;
`;
export const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 20px auto 23px;
  background-color: #6b535f;
`;

export const Section = styled.div`
  h3 {
    color: #d978ac;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const SectionList = styled.ul`
  margin-left: 19px;
  list-style: inside;
  list-style-position: outside;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
  &::marker {
    font-size: 10px;
  }
`;

export const Item = styled.li`
  font-weight: 300;
  letter-spacing: 0.28px;
  line-height: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const InlargedText = styled.span`
  font-weight: 700;
  letter-spacing: 0.28px;
  color: white;
`;

export const Tiffany = styled.span`
  color: #43ffd2;
`;

export const AddSection = styled.div`
  /* padding: 20px 10px 30px; */
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-bottom: 160px;
  h3 {
    color: #d978ac;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const DeliveryItem = styled.li`
  font-weight: 300;
  line-height: 20px;

  span {
    color: #43ffd2;
  }
`;
export const Additional = styled.p`
  text-transform: none;
  font-weight: 300;
  line-height: 20px;
  &:last-child {
    padding-top: 20px;
  }
  span {
    color: #43ffd2;
  }
`;

export const OptionList = styled.ul`
  margin-bottom: 25px;
  margin-left: 19px;
  list-style: inside;
  list-style-position: outside;
  &::marker {
    font-size: 10px;
  }
`;

export const OptionItem = styled.li`
  font-weight: 300;
  text-transform: none;
`;

export const SectionWrapper = styled.div`
  margin-top: 60px;
`;

export const GlassBox = styled.div`
  padding: 20px 10px 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
export const PngBox = styled.div`
  position: relative;
`;

export const LastPion = styled.img`
  position: absolute;
  z-index: -1;
  right: -7%;
  bottom: -45%;
  width: 85%;
`;

export const BottomWriting = styled.img`
  position: absolute;
  height: 100px;
  width: 135px;
`;

export const LeftEllipse = styled.img`
  position: absolute;
  z-index: -1;
  left: -5%;
  bottom: -50%;
`;

export const RightEllipse = styled.img`
  position: absolute;
  z-index: -2;
  bottom: -30%;
  right: -10%;
`;
