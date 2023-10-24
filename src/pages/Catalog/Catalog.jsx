import { useState } from "react";
import CategoriesSorting from "../../components/FilterMenu/CategoriesSorting/CategoriesSorting";
import FilterAccordion from "../../components/FilterMenu/FilterAccordion/FilterAccordion";
import ProductFilter from "../../components/FilterMenu/ProductFilter/ProductFilter";
import ProductSorting from "../../components/FilterMenu/ProductSorting/ProductSorting";
import Footer from "../../components/Footer/Footer";

import {
  Container,
  TitlePageTwo,
  TitlePage,
  AsideText,
  NavBox,
} from "./Catalog.styled";

const Catalog = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Container>
      <NavBox>
        <p>Главная / Каталог</p>
      </NavBox>
      <TitlePage>каталог</TitlePage>
      <TitlePageTwo>букетов</TitlePageTwo>
      <AsideText>
        В нашем магазине самый большой выбор букетов для любых событий:
      </AsideText>
      <div>
        <FilterAccordion
          title="фильтр товаров"
          index={0}
          isActive={activeIndex === 0}
          onAccordionClick={() => handleAccordionClick(0)}
        >
          <ProductFilter />
        </FilterAccordion>

        <FilterAccordion
          title="сортировка товаров"
          index={1}
          isActive={activeIndex === 1}
          onAccordionClick={() => handleAccordionClick(1)}
        >
          <ProductSorting />
        </FilterAccordion>

        <FilterAccordion
          title="Категории"
          index={2}
          isActive={activeIndex === 2}
          onAccordionClick={() => handleAccordionClick(2)}
        >
          <CategoriesSorting />
        </FilterAccordion>
      </div>
      <Footer />
    </Container>
  );
};

export default Catalog;
