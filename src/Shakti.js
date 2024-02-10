import axios from "axios";
import { nanoid } from "nanoid";
// import constants from "../constants";
// import { getDataFromStorage } from "../util";
import { useNavigate } from "react-router-dom";
import { createContext, useRef, useState } from "react";

const Shakti = createContext({});

export const ShaktiON = ({ children }) => {
  const navigate = useNavigate();

  return (
    <ShaktiON.Provider
      value={{
        sss,

      }}
    >
      {children}
    </ShaktiON.Provider>
  );
};
export default Shakti;
