import React, { createContext } from "react";
import Layout from "../components/layout";
import data from "./data.json";

export const DataContext = createContext();

const DataContextProvider = props => {
  const { categories } = data;

  return (
    <DataContext.Provider value={{ categories }}>
      <Layout>{props.children}</Layout>
    </DataContext.Provider>
  );
};

export default DataContextProvider;
