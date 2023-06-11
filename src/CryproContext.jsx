import {createContext, useContext, useEffect, useState} from 'react'

const Crypto =createContext();

// eslint-disable-next-line react/prop-types
const CryproContext = ({children}) => {
  const [cur,setcur]=useState("INR");
  const[symbol, setSymbol]=useState("rup")
  

useEffect(()=>{

    cur ==="INR" ? setSymbol("rup"): setSymbol("$")

},[cur])

    return (
  <Crypto.Provider value={{cur,symbol,setcur}}>
    {children}
  </Crypto.Provider>  
  )
};

export default CryproContext

export const CryptoState=()=>{
    return useContext(crypto)
}