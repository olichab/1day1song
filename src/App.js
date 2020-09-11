import React from "react";
import { isIE } from "react-device-detect";
import BrowserNotSupported from "./components/BrowserNotSupported";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./scss/App.scss";

const App = () => {
  return isIE ? (
    <div className="App">
      <BrowserNotSupported />
    </div>
  ) : (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
