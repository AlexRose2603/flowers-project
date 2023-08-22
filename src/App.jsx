import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { MainPage } from "./pages/MainPage/MainPage";
// import { Catalog } from "./pages/Catalog/Catalog";
// import { DeliveryPayment } from "./pages/DeliveryPayment/DeliveryPayment";
// import { AboutUs } from "./pages/AboutUs/AboutUs";
// import { ErrorPage } from "./pages/404/ErrorPage";
// import { FackUPage } from "./pages/FAQ/FackUPage";
// import { Contacts } from "./pages/Contacts/Contacts";
// import { CorporativeClients } from "./pages/CorporativeClients/CorporativeClients";
import { Layout } from "./components/SharedLayout/Layout/Layout";
import { lazy } from "react";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const DeliveryPayment = lazy(() =>
  import("./pages/DeliveryPayment/DeliveryPayment")
);
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ErrorPage = lazy(() => import("./pages/404/ErrorPage"));
const FackUPage = lazy(() => import("./pages/FAQ/FackUPage"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const CorporativeClients = lazy(() =>
  import("./pages/CorporativeClients/CorporativeClients")
);

function App() {
  return (
    <>
      <h1>Hello friends</h1>
      <Routes>
        <Route />
        <Route path="/" element={<Layout />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="delivery-and-payment" element={<DeliveryPayment />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<FackUPage />} />
        <Route path="/corporative-clients" element={<CorporativeClients />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
