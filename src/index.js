import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./pages/header/Header";
import MainHeader from "./pages/main/MainHeader";
import MainContent from "./pages/main/MainContent";

import "./styles/Common.scss";
import "./styles/Main.scss";
import Footer from "./pages/footer/Footer";
import Popup from "./components/popup/Popup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
    <Popup/>
      <Header />
      <main className="main">
        <MainHeader/>
        <MainContent/>
      </main>
      <Footer/>
      </>
  </React.StrictMode>
);
