import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
`;
export const Ellipse = styled.img`
  position: absolute;
  margin-left: -10px;
`;

export const Pion = styled.img`
  /* position: absolute; */
  height: 150px;
  width: 130px;
  margin-left: auto;
  margin-right: -10px;
  display: inline-flex;
  justify-content: end;
  align-items: flex-end;
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
  width: 250px;
  height: 200px;
  transform: rotate(17.49deg);
  transform-origin: 0 0;
  display: inline-block;

  margin-left: auto;
`;
export const EllipseCards2 = styled.img`
  position: absolute;
  transform: rotate(-71.86deg);
  transform-origin: 0 0;
  background: #6b535f;
  /* box-shadow: 100px 100px 100px; */
  border-radius: 9999px;
  filter: blur(100px);
  width: 395px;
  height: 220px;
  top: 800px;
  left: -10%;
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
  padding-left: 46px;
  margin-bottom: 60px;
`;

export const InfoText = styled.p`
  max-width: 500px;
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
  padding: 20px 10px 30px;
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
`;

export const OptionItem = styled.li`
  font-weight: 300;
  text-transform: none;
`;

export const SectionWrapper = styled.div`
  margin-top: 60px;
`;
