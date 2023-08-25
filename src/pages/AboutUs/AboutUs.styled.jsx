import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkToMain = styled(NavLink)`
  color: white;
  font-size: 12px;
  letter-spacing: 0.48px;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 5;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-bottom: 20px;
  margin-left: 55px;
`;

export const InfoBox = styled.div`
  padding: 10px;
  background-color: #1d2b2b;
  width: 90%;
  margin: 0 -10px 70px auto;
`;

export const SubTitle = styled.h3`
  color: #43ffd2;
  font-size: 20px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.4px;
  width: 81px;
  margin-bottom: 10px;
`;

export const Part1 = styled.p`
  font-weight: 300;
  letter-spacing: 0.28px;
  margin-bottom: 20px;
  line-height: 20px;
`;

export const Part2 = styled.p`
  font-weight: 300;
  text-transform: none;
`;

export const InfoBox2 = styled.div`
  margin-bottom: 60px;
`;

export const BoxName = styled.h4`
  color: #43ffd2;
  font-size: 20px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.4px;
  margin-bottom: 10px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 250px;
  }
`;

export const Paragraph = styled.p`
  letter-spacing: 0.28px;
  line-height: 20px;
  max-width: 600px;
`;

export const InfoBox3 = styled.div`
  margin-bottom: 66px;
`;

export const List = styled.ul`
  list-style: inside;
  list-style-position: outside;
  margin-left: 19px;
`;
export const Item = styled.li`
  line-height: 20px;
  font-weight: 300;
  text-transform: none;
`;

export const Paragraph2 = styled.p`
  font-size: 20px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.4px;
  margin-bottom: 24px;
`;

export const Paragraph3 = styled.p`
  font-weight: 300;
  letter-spacing: 0.28px;
  margin-bottom: 110px;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 182px;
  }
`;
