import { Header } from "../../components/SharedLayout/Header/Header";
import { Catalog } from "../Catalog/Catalog";
import { Contacts } from "../Contacts/Contacts";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Catalog />
      <Contacts />
    </>
  );
};
