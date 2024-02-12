import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  return (
    <GlobalContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
