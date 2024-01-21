import React, { useState } from "react";
import Page from "./components/Page";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 4000);

  return (
    <>
      {isVisible ? <Loader /> : ""}
      <Page />
      <Footer />
    </>
  );
};

export default App;

//·················· Chux Dennis  ··················
