import { useState } from "react";

import { Formik } from "formik";

import PriceSlider from "../PriceSlider/PriceSlider";

import {
  ByFilterName,
  FilterItem,
  FilterInput,
  ContainerCheckbox,
  SliderConteiner,
  ListContainer,
  List,
  StyledForm,
} from "./ProductFilter.styled";

const byLights = ["нежные", "яркие", "test"];
const byColor = [
  "белый",
  "желтый",
  "зеленый",
  "красный",
  "оранжевый",
  "розовый",
  "синий",
];
const byFormat = [
  "букет",
  "в вазе",
  "в конверте",
  "в корзине",
  "в шляпной коробке",
  "в ящике",
];

const byFlower = [
  "Альстромерия (2)",
  "Антуриум (1)",
  "Аспарагус (1)",
  "Астильба (7)",
  "в шляпной коробке",
  "Астранция (1)",
];

const initialValues = {
  checked: [],
};

const ProductFilter = () => {
  const [inputValue, setInputValue] = useState([]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleChange = (e, setFieldValue, values) => {
    const { value, checked } = e.target;

    if (checked) {
      setFieldValue("checked", [...values.checked, value]);
      setInputValue([...inputValue, value]);
    } else {
      setFieldValue(
        "checked",
        values.checked.filter((item) => item !== value)
      );
      setInputValue(inputValue.filter((item) => item !== value));
    }
  };

  return (
    <ListContainer>
      <List>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <StyledForm>
              <ByFilterName id="checkbox-group">По свету</ByFilterName>
              <div role="group" aria-labelledby="checkbox-group">
                {byLights.map((item, index) => {
                  return (
                    <ContainerCheckbox key={index}>
                      <FilterInput
                        id={item}
                        type="checkbox"
                        name="checked"
                        value={item}
                        onChange={(e) => {
                          handleChange(e, setFieldValue, values);
                        }}
                      />
                      <FilterItem htmlFor={item}>{item}</FilterItem>
                    </ContainerCheckbox>
                  );
                })}
              </div>
              <ByFilterName id="checkbox-group">По цвету</ByFilterName>
              <div role="group" aria-labelledby="checkbox-group">
                {byColor.map((item, index) => {
                  return (
                    <ContainerCheckbox key={index}>
                      <FilterInput
                        id={item}
                        type="checkbox"
                        name="checked"
                        value={item}
                        onChange={(e) => {
                          handleChange(e, setFieldValue, values);
                        }}
                      />
                      <FilterItem htmlFor={item}>{item}</FilterItem>
                    </ContainerCheckbox>
                  );
                })}
              </div>
              <ByFilterName id="checkbox-group">по формату</ByFilterName>
              <div role="group" aria-labelledby="checkbox-group">
                {byFormat.map((item, index) => {
                  return (
                    <ContainerCheckbox key={index}>
                      <FilterInput
                        id={item}
                        type="checkbox"
                        name="checked"
                        value={item}
                        onChange={(e) => {
                          handleChange(e, setFieldValue, values);
                        }}
                      />
                      <FilterItem htmlFor={item}>{item}</FilterItem>
                    </ContainerCheckbox>
                  );
                })}
              </div>

              <SliderConteiner>
                <ByFilterName>стоимость</ByFilterName>
                <PriceSlider />
              </SliderConteiner>
              <ByFilterName id="checkbox-group">по цветку</ByFilterName>
              <div role="group" aria-labelledby="checkbox-group">
                {byFlower.map((item, index) => {
                  return (
                    <ContainerCheckbox key={index}>
                      <FilterInput
                        id={item}
                        type="checkbox"
                        name="checked"
                        value={item}
                        onChange={(e) => {
                          handleChange(e, setFieldValue, values);
                        }}
                      />
                      <FilterItem htmlFor={item}>{item}</FilterItem>
                    </ContainerCheckbox>
                  );
                })}
              </div>
            </StyledForm>
          )}
        </Formik>
      </List>
    </ListContainer>
  );
};

export default ProductFilter;
