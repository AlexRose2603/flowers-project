import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/SharedLayout/Layout/Layout";

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

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/delivery-and-payment" element={<DeliveryPayment />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FackUPage />} />
          <Route path="/corporative-clients" element={<CorporativeClients />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
