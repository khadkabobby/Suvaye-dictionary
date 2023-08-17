import React from "react";
import { PageProvider } from "./context/PageContext";
import { PageContent } from "./pages/PageContent";


const App = () => {
  return (
    <PageProvider>
      <PageContent />
    </PageProvider>
  );
};

export default App;
