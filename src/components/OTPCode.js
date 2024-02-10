import React, { useState, useContext, useRef, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import Master from "../utils/Master";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const OTPCode = () => {
  const { setotp, phonenumber, userid, roles, setroles } = useContext(Master);
  const [otpvalues, setotpvalues] = useState(Array(6).fill(''));
  const inputrefs = useRef([...Array(6)].map(() => React.createRef()));
  const navigate = useNavigate();
  const location = useLocation();
  const fromlocation = location.state && location.state.from;

  const handleotpchange = (index, value) => {
    const newotpvalues = [...otpvalues];
    newotpvalues[index] = value;
    setotpvalues(newotpvalues);

    // Move focus to the next input
    if (value !== '' && index < inputrefs.current.length - 1) {
      inputrefs.current[index + 1].current.focus();
    }
  };

  const handleresendotp = () => {
  };

  const handleverifyotp = () => {
    const enteredOtp = otpvalues.join('');
    console.log('Verifying OTP:', enteredOtp);
 
      axios.get(`http://localhost/asiatech/back?rest_route=/simple-jwt-login/v1/auth&phone_number=${phonenumber.current}&secod=${enteredOtp}&shakti=${userid.current}`)
      .then((response) => {
        if (response.data.success) {
          setroles(response.data.data.role);
          // localStorage.setItem('userid', userid.current);
          // localStorage.setItem('phonenumber', phonenumber.current);
          // const prevLocation = localStorage.getItem('prevLocation');
          navigate(fromlocation || '/dashboard');
        }
      })
      .catch((error) => {
        console.error('API call error:', error);
      });
  };

  const isNumber = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^\d+$/.test(keyValue)) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    // Check if all OTP fields are filled
    if (otpvalues.every((value) => value !== '')) {
      // Trigger the verification when all fields are filled
      handleverifyotp();
    }
  }, [otpvalues]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card py-5 px-3 col-md-6" style={{ alignItems: 'center' }}>
        <h5 className="m-0">Please Enter the One-time Password to verify your account</h5>
        <span className="mobile-text" id="enterOTP"></span>
        <div className="digit-group d-flex flex-row mt-5" id="otpno" data-autosubmit="false" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
          {otpvalues.map((value, index) => (
            <input
              key={index}
              type="number"
              className="form-control"
              value={value}
              onChange={(e) => handleotpchange(index, e.target.value)}
              maxLength="1"
              ref={inputrefs.current[index]}
              style={{ width: '10%', border: 'none', borderBottom: '1px solid #d4d1d1' }}
            />
          )).slice(0, 6)} {/* Ensure only 6 input boxes are rendered */}
        </div>
        <br />
        <div className="submit-section">
          <div className="float-right">
            {/* <button
              type="button"
              name="submit"
              id="verifyOTP"
              className="btn btn-sm btn-primary btn-md btn-block waves-effect text-center m-b-10"
              onClick={handleverifyotp}
            >
              Verify
            </button> */}
          </div>
          <span id="otpVerifyAlert" style={{ color: 'red' }}></span>
        </div>
        <div className="text-center mt-5">
          <span className="d-block mobile-text">Don't receive the code?</span>
          <span className="font-weight-bold text-danger resendOTP" style={{ cursor: 'pointer' }} onClick={handleresendotp}>
            Resend
          </span>
        </div>
      </div>
    </div>
  );
};

export default OTPCode;
