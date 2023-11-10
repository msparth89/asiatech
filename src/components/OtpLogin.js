import { createContext, useRef, useState,useContext } from "react";

import Navbar from "./Navbar";
import Loader from "../Loader.gif";
import axios from 'axios';
import Redirect from './Redirect';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Master from "../utils/Master";

// for using redirect because it is depreacated in react new version


const OtpLogin = (Props) => {

    const {
        phoneNumberChange,
        PhoneNumber

      } = useContext(Master);

    // const [value, setValue] = useState()
    return (
      <PhoneInput
        placeholder="Enter phone number"
        defaultCountry="RU"
        value={PhoneNumber.current}
        onChange={(e)=>phoneNumberChange(e)}/>



        
    )



}



export default OtpLogin;


