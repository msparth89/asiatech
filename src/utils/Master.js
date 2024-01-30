import axios from "axios";
// import constants from "../constants";
// import { getDataFromStorage } from "../util";
import { createContext, useRef, useState } from "react";
import { parsePhoneNumber, getCountryCallingCode } from 'react-phone-number-input'


const Master = createContext({});

export const MasterContext = ({ children }) => {

  let PhoneNumber = useRef(null);
  let Countrycode = useRef(null);
  let UserID = useRef(null);
  let JWT = useRef(null);
  let Roles = useRef(null);
  let Name = useRef(null);
  let PortId = useRef(null);
  let OTP = useRef(null);
  let screen = useRef(null);


  function phoneNumberChange(number) {
    console.log("Shakti", number);
    PhoneNumber.current = number;
    // parsePhoneNumber(number)

    const phoneNumber = parsePhoneNumber(number)
    if (phoneNumber) {
      Countrycode.current = getCountryCallingCode(phoneNumber.country);

    }
  }

  function setscreen(scr) {
    screen.current = scr;

  }

  function setOTP(otp) {
    OTP.current = otp;

  }

  function setUserID(id) {
    UserID.current = id;

  }

  function setRoles(roles){
    Roles.current=roles;
  }

  return (
    <Master.Provider
      value={{
        PhoneNumber,
        phoneNumberChange,
        setOTP,
        OTP,
        setUserID,
        UserID,
        setRoles,
        Roles,
        setscreen,
        screen

      }}
    >
      {children}
    </Master.Provider>
  );
};


export default Master;
