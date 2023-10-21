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
  /* background: #43ffd33a; */
  height: 100%;
  /* position: relative; */
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
  position: absolute;
  z-index: 999;
  width: 300px;
  max-height: 0;

  overflow: hidden;

  transition: top 1.5s ease, opacity 1.5s ease, transform 1.5s ease,
    max-height 1.5s ease;

  &.active {
    max-height: 100%;

    visibility: visible;
    height: auto;
    /* top: 11px; */
  }
`;

export const StyledForm = styled(Form)`
  /* padding: 10px 0 30px 10px; */
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  /* border: 1px solid #40ff00; */
  backdrop-filter: blur(10px);

  /* position: fixed; */
  /* z-index: 999; */
  /* width: 300px; */
  /* min-height: 100%; */
  /* opacity: 0; */
  /* overflow: hidden; */
  /* top: 0; */
  /* left: 30px; */
  /* transform: translateY(-170%); */

  /* transition: top 1.7s ease, opacity 1.5s ease, transform 2.5s,
    max-height 1.3s ease; */
  &.active {
    /* position: static; */
    /* max-height: 100%; */
    /* transform: translateY(0); */
    /* opacity: 1; */
    /* visibility: visible; */

    /* top: 11px; */
  }
`;
