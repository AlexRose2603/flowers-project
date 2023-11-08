import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkToMain = styled(Link)`
  margin-bottom: 20px;
  color: white;
  position: relative;
  z-index: 10;
`;

export const PageTitle = styled.h2`
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-bottom: 10px;
  position: relative;
  z-index: 5;
  margin-top: 30px;

  span {
    display: inline-flex;
    margin-left: 54px;
    @media screen and (min-width: 498px) {
      margin-left: 12px;
    }
  }
`;

export const TextInfo = styled.p`
  width: 250px;
  margin-left: auto;
  margin-bottom: 30px;
  position: relative;
  z-index: 5;
`;

export const TopLeftFlower = styled.img`
  position: absolute;
  z-index: 6;
  width: 100px;
  height: 170px;
  top: 20%;
  left: -10%;
`;

export const TopRightFlower = styled.img`
  position: absolute;
  width: 130px;
  height: 210px;
  left: 62%;
  top: 7%;
  z-index: 6;
`;

export const PinkEllipse = styled.img`
  position: absolute;
  top: 10%;
`;

export const BtmPink = styled.img`
  position: absolute;
`;

export const BtmTiffany = styled.img`
  position: absolute;
  left: 5%;
  top: 10%;
`;
