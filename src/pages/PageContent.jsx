import React from "react";
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import { usePageContext } from "../context/PageContext";


export const PageContent = () => {
  const { currentPage } = usePageContext();

  return (
    <div>
      {currentPage === "home" ? <HomePage /> : <SecondPage />}
    </div>
  );
};
