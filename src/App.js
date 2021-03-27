import React from "react";
import { AppContextProvider } from "./context/appContext";

import "./App.scss";
import { Cards } from "./pages/Cards";

function App() {
  return (
    <AppContextProvider>
      <Cards />
    </AppContextProvider>
  );
}

export default App;
