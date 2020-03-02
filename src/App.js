import React from "react";
import "./styles/index.scss";
import DataContextProvider from "./context/dataContext";
import Home from "./components/home";

const App = () => {
  return (
    <DataContextProvider>
      <div className="main">
        <Home />
      </div>
    </DataContextProvider>
  );
};

export default App;
