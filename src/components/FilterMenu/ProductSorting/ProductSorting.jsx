import { useState } from "react";

import { Formik } from "formik";

import {
  FilterItem,
  FilterInput,
  ContainerCheckbox,
  ListContainer,
  List,
  StyledForm,
} from "../ProductSorting/ProductSorting.styled";

const bySort = ["по популярности", "сначала дорогие", "сначала дешевые"];

const initialValues = {
  picked: "",
};

const ProductSorting = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (values) => {
    console.log(values.picked);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setInputValue(value);
  };

  return (
    <ListContainer>
      <List>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <StyledForm>
              <div role="group" aria-labelledby="checkbox-group">
                {bySort.map((item, index) => {
                  return (
                    <ContainerCheckbox key={index}>
                      <FilterInput
                        id={item}
                        type="radio"
                        name="picked"
                        value={item}
                        onInput={(e) => {
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

export default ProductSorting;
