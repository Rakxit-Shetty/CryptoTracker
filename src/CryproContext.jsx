import { createContext, useContext, useEffect, useState } from "react";
const Crypto = createContext();

// eslint-disable-next-line react/prop-types
const CryproContext = ({ children }) => {

  const [cur, setCur] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    cur === "INR" ? setSymbol("₹") : setSymbol("$");
  }, [cur]);

  return (
    <Crypto.Provider value={{cur, setCur, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryproContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
