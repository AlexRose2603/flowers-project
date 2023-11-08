import { Field, Form } from "formik";
import styled from "styled-components";

export const LeftFlower = styled.img`
  position: absolute;
  left: -1%;
  top: 0;
  width: 180px;
`;

export const RightFlower = styled.img`
  position: absolute;
  top: -1%;
  right: -5%;
  width: 300px;
`;

export const Container = styled.div`
  padding: 20px 10px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-family: "Cormorant", serif;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-top: 20px;
  margin-bottom: 60px;
  position: relative;
  z-index: 5;
`;

export const ContactDetails = styled.p`
  color: #43ffd2;
  font-weight: 700;
  letter-spacing: 0.84px;
  margin-bottom: 20px;
`;

export const StyledForm = styled(Form)``;

export const FormList = styled.ul``;

export const FormItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  text-transform: none;
  letter-spacing: 0.84px;
`;

export const FieldInput = styled(Field)`
  padding: 20px;
  border: 1px solid #555555;
  background-color: transparent;
  color: white;
`;

export const PromoBox = styled.div`
  display: flex;
  button {
    padding: 20px 45px;
    border: 1px solid #43ffd2;
    color: #43ffd2;
    background-color: transparent;
    font-weight: 700;
    letter-spacing: 0.84px;
    width: 180px;
  }
`;

export const FinalPayment = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    color: #43ffd2;
    font-size: 20px;
    font-weight: 700;
  }
  h4 {
    letter-spacing: 0.8px;
    width: 150px;
    margin-bottom: 10px;
    margin-right: 40px;
  }
`;

export const PaymentBtn = styled.button`
  padding: 16px 98px;
  text-transform: uppercase;
  background-color: #43ffd2;
  border-width: 0;
  margin-bottom: 10px;
  margin-top: 20px;
`;
