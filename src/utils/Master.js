import axios from "axios";
// import constants from "../constants";
// import { getDataFromStorage } from "../util";
import { createContext, useRef, useState } from "react";

const Master = createContext({});

export const MasterContext = ({ children }) => {

  let PhoneNumber = useRef(null);





  

  function phoneNumberChange(number)
  {
    console.log("Shakti",number);
    PhoneNumber.current=number;
  }



  return (
    <Master.Provider
      value={{
        PhoneNumber,
        phoneNumberChange
 

      }}
    >
      {children}
    </Master.Provider>
  );
};


export default Master;
