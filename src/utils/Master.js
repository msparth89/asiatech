import axios from "axios";
// import constants from "../constants";
// import { getDataFromStorage } from "../util";
import { createContext, useRef, useState } from "react";
import { parsePhoneNumber, getCountryCallingCode } from 'react-phone-number-input'


const Master = createContext({});

export const MasterContext = ({ children }) => {

  let phonenumber = useRef(null);
  let countrycode = useRef(null);
  let userid = useRef(null);
  let jwt = useRef(null);
  let roles = useRef(null);
  let name = useRef(null);
  let portid = useRef(null);
  let otp = useRef(null);
  let screen = useRef(null);
  let shippingaddress= useRef({});
  let billingaddress= useRef({});
  let shopinfo= useRef({});


  function phonenumberChange(number) {
    console.log("Shakti", number);
    phonenumber.current = number;

    const phonenumber = parsePhoneNumber(number)
    if (phonenumber) {
      countrycode.current = getCountryCallingCode(phonenumber.country);

    }
  }

  function setscreen(scr) {
    screen.current = scr;

  }

  function setotp(otp) {
    otp.current = otp;

  }

  function setuserid(id) {
    userid.current = id;

  }

  function setroles(roles){
    roles.current=roles;
  }

  return (
    <Master.Provider
      value={{
        phonenumber,
        phonenumberChange,
        setotp,
        otp,
        setuserid,
        userid,
        setroles,
        roles,
        setscreen,
        screen

      }}
    >
      {children}
    </Master.Provider>
  );
};


export default Master;
