import { useState } from "react";
import CategoriesSorting from "../../components/FilterMenu/CategoriesSorting/CategoriesSorting";
import FilterAccordion from "../../components/FilterMenu/FilterAccordion/FilterAccordion";
import ProductFilter from "../../components/FilterMenu/ProductFilter/ProductFilter";
import ProductSorting from "../../components/FilterMenu/ProductSorting/ProductSorting";
import Footer from "../../components/Footer/Footer";
import topLFlower from "../../assets/images/Catalog/top-left-flower.png";
import topRFlower from "../../assets/images/Catalog/top-right-flower.png";
import topEllipse from "../../assets/images/Catalog/top-pink-ellipse.png";
import { Container } from "../MainPage/MainPage.styled";
// import bottomPink from "../../assets/images/Catalog/bottom-pink.png";
// import bottomTiffany from "../../assets/images/Catalog/bottom-tiffany.png";
import {
  // BtmPink,
  // BtmTiffany,
  LinkToMain,
  PageTitle,
  PinkEllipse,
  TextInfo,
  TopLeftFlower,
  TopRightFlower,
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
    <>
      <PinkEllipse src={topEllipse} alt="pink shadow ellipse" />
      <Container>
        <LinkToMain to="/">Главная / Каталог</LinkToMain>

        <TopRightFlower src={topRFlower} alt="dark pink flower" />
        <PageTitle>
          каталог
          <span>букетов</span>
          <TopLeftFlower src={topLFlower} alt="dark pink flower" />
        </PageTitle>
        <TextInfo>
          В нашем магазине самый большой выбор букетов для любых событий:
        </TextInfo>
        <div style={{ position: "relative", zIndex: "6" }}>
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
        {/* <BtmPink src={bottomPink} alt="" />
        <BtmTiffany src={bottomTiffany} alt="" /> */}
      </Container>
      <Footer />
    </>
  );
};

export default Catalog;
