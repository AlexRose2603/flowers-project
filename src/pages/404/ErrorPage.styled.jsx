import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Addings = styled.div`
  /* position: relative; */
`;

export const MainFlower = styled.img`
  position: absolute;
  z-index: 3;
  top: 60px;
  width: 86%;
`;

export const FourBack = styled.img`
  position: absolute;
  z-index: -1;
  width: 120px;
  height: 160px;
  left: -3%;
  top: 9%;
`;
export const ZeroNum = styled.img`
  position: absolute;
  z-index: 4;
  width: 135px;
  height: 135px;
  left: 21%;
  top: 21%;
`;
export const FourFront = styled.img`
  position: absolute;
  width: 130px;
  height: 190px;
  left: 44%;
`;

export const Ellipse1 = styled.img`
  position: absolute;
`;

export const Ellipse2 = styled.img`
  /* position: absolute; */
`;

export const Ellipse3 = styled.img``;

export const Handwriting = styled.img`
  position: absolute;
  width: 127px;
  height: 80px;
  left: 61%;
  top: 47%;
`;

export const TextBox = styled.div`
  position: absolute;
  z-index: 4;
  left: 38%;
  bottom: 22%;
  p {
    margin-bottom: 20px;
  }
`;
export const ToMain = styled(NavLink)`
  font-weight: 700;
  text-decoration: underline;
  color: #43ffd2;
`;
