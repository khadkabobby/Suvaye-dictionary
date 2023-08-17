import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [data, setData] = useState([{}]);

  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, data, setData }}
    >
      {children}
    </PageContext.Provider>
  );
};
export const usePageContext = () => {
  return useContext(PageContext);
};
