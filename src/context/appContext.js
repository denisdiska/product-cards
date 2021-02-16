import React, { useContext, useEffect, useState } from "react";

import api from "../utils/api";
import endpoint from "../constants/endpoint";

const AppContext = React.createContext();

export function GetAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [my_data, setMyData] = useState(null);

  useEffect(() => {
    const getMyData = async () => {
      const dataValue = await api.get(endpoint.newCards());

      if (dataValue) {
        setMyData(dataValue);
      } else {
        console.log("err");
      }
    };

    getMyData();
  }, []);

  return (
    <AppContext.Provider value={{ my_data }}>{children}</AppContext.Provider>
  );
}
