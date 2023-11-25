// import Shakti from "../shakti";
// import { useContext } from "react";
// import React, { useState, useRef, useEffect } from "react";


// export default OTPCode=()=>{
// const {
// sss
//   } = useContext(Shakti);

// return(
// <>
// <H2>

//     {sss}
// </H2>
// </>

// )
// }


import React, { useState, useContext } from 'react';
import OtpInput from 'react-otp-input';
import Master from "../utils/Master";
import axios from "axios";



export default function OTPCode() {
  const {setOTP, OTP, PhoneNumber } = useContext(Master);
  const [otp, setOtp] = useState('');

  function SettingOTP(num){
    setOtp(num);
    setOTP(num)
    if((num+"").length==6)
    {
      handleClick(num);
    }
  }

  const handleClick = (num) => {
    // if (!buttonClicked) {
      axios.post(`http://localhost/asiatech/?rest_route=/simple-jwt-login/v1/auth&phone_number=${PhoneNumber.current}&secod=${num}&shakti=1234`
      )
        .then(response => {
          console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
          console.log("Success: ", response.success);
        })
        .catch(error => {
          console.error("API call error:", error);
        });
    // }
  };

  return (
    <>
    <OtpInput
      value={OTP.current}
      onChange={SettingOTP}
      numInputs={6}
      inputType={"number"}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />

    <div>
{OTP.current}
    </div>
    </>
  );
}