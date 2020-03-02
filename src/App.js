import React from "react";
import Layout from "./components/layout";
import DataContextProvider from "./context/dataContext";
import Home from "./components/home";

const App = () => {
  return (
    <DataContextProvider>
      <div className="App">
        <Home />
      </div>
    </DataContextProvider>
  );
};

export default App;
