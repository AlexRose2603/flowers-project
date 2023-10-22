import { useState } from "react";

import { Formik } from "formik";

import {
  FilterItem,
  FilterInput,
  ContainerCheckbox,
  ListContainer,
  List,
  StyledForm,
} from "../CategoriesSorting/CategoriesSorting.styled";

const byLights = [
  "Букеты из гипсофил",
  "Букеты из ромашек",
  "Букеты из хризантем",
  "Сборные букеты",
  "Комнатные цветы в горшках",
  "Популярное",
  "Букет на праздник",
  "Композиции из цветов",
  "Конверты",
  "Открытки",
  "Подарки",
  "Букеты из сухоцветов",
  "Букеты роз",
  "Цветы на похороны",
  "Упаковка подарков",
  "Монобукеты",
  "Шары",
];

const initialValues = {
  categories: [],
};

const CategoriesSorting = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState([]);

  const togleMenu = () => {
    return setTimeout(() => {
      setIsOpen(!isOpen);
    }, 0);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleChange = (e, setFieldValue, values) => {
    const { value, checked } = e.target;
    console.log(values.categories);
    console.log(value);
    if (checked) {
      setFieldValue("categories", [...values.categories, value]);
      setInputValue([...inputValue, value]);
    } else {
      setFieldValue(
        "categories",
        values.categories.filter((item) => item !== value)
      );
      setInputValue(inputValue.filter((item) => item !== value));
    }
  };
  console.log(inputValue);
  return (
    <ListContainer>
      <List>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <StyledForm>
              <div role="group" aria-labelledby="checkbox-group">
                {byLights.map((item, index) => {
                  return (
                    <ContainerCheckbox key={index}>
                      <FilterInput
                        id={item}
                        type="checkbox"
                        name="categories"
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

export default CategoriesSorting;
