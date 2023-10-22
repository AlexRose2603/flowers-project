import styled from "styled-components";
import { Field, Form } from "formik";

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
  height: 100%;
`;

export const FilterButton = styled.button`
  color: #43ffd2;
  outline: none;
  border: 0;
  background: transparent;
  font-family: Oswald;
  font-size: 16px;

  letter-spacing: 1.6px;
  text-decoration-line: underline;
  text-transform: uppercase;
  margin-bottom: 10px;

  &::after {
    content: "▼";

    color: #43ffd2;
    list-style-type: none;
    text-decoration-line: none;

    margin-left: 10px;
  }
`;

export const List = styled.div`
  z-index: 999;
  width: 300px;
  overflow: hidden;
`;

export const StyledForm = styled(Form)`
  padding: 20px 0 30px 10px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  background: rgba(222, 13, 13, 0.3);

  backdrop-filter: blur(10px);
`;
