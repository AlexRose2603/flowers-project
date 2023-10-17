import styled from "styled-components";
import { Field } from "formik";

export const Container = styled.div`
  padding: 0 10px;
`;

export const ByFilterName = styled.div`
  color: #43ffd2;

  font-family: Oswald;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  text-transform: uppercase;

  margin-bottom: 8px;
`;

export const SliderConteiner = styled.div`
  color: #43ffd2;
  margin: 20px 0 20px 0;
`;

export const FilterInput = styled(Field)`
  cursor: pointer;
  opacity: 0;
  position: absolute;
`;

export const FilterItem = styled.label`
  display: flex;
  font-family: Oswald;
  font-size: 12px;

  font-weight: 300;

  letter-spacing: 0.48px;
  text-transform: uppercase;

  margin-bottom: 5px;

  cursor: pointer;
  display: flex;
  &:hover {
    color: #43ffd2;
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  /* text-align: center; */

  cursor: pointer;

  input:checked {
    & + label::before {
      content: "";
      border-radius: 2px;
      border: 0.5px solid #43ffd2;
      background: #43ffd2;
    }
  }

  label::before {
    content: "";
    border-radius: 2px;
    border: 0.5px solid #fff;
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    margin-right: 6px;
  }
`;
export const ListContainer = styled.div`
  position: relative;
`;

export const FilterButton = styled.button`
  background-color: #ff5733;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export const List = styled.div`
  width: 300px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 999999;
  position: ${({ isOpen }) => (isOpen ? "sticky" : "absolute")};
  top: 100%; /* Размещение списка под кнопкой */
  left: 0;

  max-height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)}; /* Прозрачность */
  transform: translateY(
    ${({ isOpen }) => (isOpen ? "0" : "-10px")}
  ); /* Сдвиг при открытии */
  transition: opacity 0.3s, transform 0.3s; /* Плавная анимация */
`;
