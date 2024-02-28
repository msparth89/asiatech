import axios from "axios";
// import constants from "../constants";
// import { getDataFromStorage } from "../util";
import { createContext, useRef, useState } from "react";
import { parsePhoneNumber, getCountryCallingCode } from 'react-phone-number-input'


const Master = createContext({});  // function setbusinessphno(number){
  //   businessphno.current = number;

  // }

export const MasterContext = ({ children }) => {

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

  // let posphno=useRef(null); 

  // let customerphno=useRef(null);
  // let businessphno=useRef(null);
  let [rolephno,setrolephno]=useState("");
  let [businessphno,setbusinessphno]=useState("");
  let [customerphno,setcustomerphno]=useState("");
  let [posphno,setposphno]=useState("");
  
  let [roledata,setroledata]=useState("");
  let [businessdata,setbusinessdata]=useState("");
  let [customerdata,setcustomerdata]=useState("");
  let [posdata,setposdata]=useState("");



  // function setposphno(number){
  //   posphno.current = number;

  //   const phonenumber = parsePhoneNumber(number)
  //   if (phonenumber) {
  //     countrycode.current = getCountryCallingCode(phonenumber.country);

  //   }
  // }


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
        posphno,
        setposphno,
        customerphno,
        setcustomerphno,
        setrolephno,
        rolephno,
        businessphno,
        setbusinessphno,

        posdata,
        setposdata,
        customerdata,
        setcustomerdata,
        setroledata,
        roledata,
        businessdata,
        setbusinessdata,

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
