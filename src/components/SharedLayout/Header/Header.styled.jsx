import styled from "styled-components";
import { Icon } from "../../../utiles/Icon/Icon";

const checkingTest = (props) => {
  // console.log(props.test1);
  if (props.test1) {
    return "teal";
  }
  return "black";
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10px;

  background-color: ${checkingTest};
`;

export const Burger = styled(Icon)``;

export const Title = styled.h1`
  font-size: 20px;
  font-family: "Cormorant";
  font-weight: 300;
  letter-spacing: 4px;
  text-align: center;
`;

export const Cart = styled.div`
  background: rgba(202, 168, 168, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    top: 10%;
    left: 50%;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #43ffd2;
  }
`;
