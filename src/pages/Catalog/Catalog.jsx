import CategoriesSorting from "../../components/FilterMenu/CategoriesSorting/CategoriesSorting";
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
        <ProductFilter />
        <ProductSorting />
        <CategoriesSorting />
      </div>
      <Footer />
    </Container>
  );
};

export default Catalog;
