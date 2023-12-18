import React, { useState, useContext, useRef, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import Master from "../utils/Master";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const OTPCode = () => {
  const { setOTP, PhoneNumber, UserID, Roles, setRoles } = useContext(Master);
  console.log(PhoneNumber.current);
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  const inputRefs = useRef([...Array(6)].map(() => React.createRef()));
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state && location.state.from;

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move focus to the next input
    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleResendOtp = () => {
    console.log('Resending OTP...');
    // Implement your resend OTP logic here
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otpValues.join('');
    console.log('Verifying OTP:', enteredOtp);

    // const located = localStorage.getItem('located') === 'true';
    // const phone = localStorage.getItem('phoneNumber');
    // const userid = localStorage.getItem('userid');
    // axios.post(`http://localhost/asiatech/?rest_route=/simple-jwt-login/v1/auth&phone_number=${PhoneNumber.current}&secod=${enteredOtp}&shakti=${UserID.current}`)
    axios.post(`http://localhost/asiatech/?rest_route=/simple-jwt-login/v1/auth&phone_number=${PhoneNumber.current}&secod=${enteredOtp}&shakti=${UserID.current}`)
      .then((response) => {
        console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
        console.log('Success: ', response.data.success);
        if (response.data.success) {
          setRoles(response.data.data.role);
          // localStorage.setItem('userid', UserID.current);
          // localStorage.setItem('phoneNumber', PhoneNumber.current);
          // const prevLocation = localStorage.getItem('prevLocation');
          navigate(fromLocation || '/dashboard');
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
    if (otpValues.every((value) => value !== '')) {
      // Trigger the verification when all fields are filled
      handleVerifyOtp();
    }
  }, [otpValues]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card py-5 px-3 col-md-6" style={{ alignItems: 'center' }}>
        <h5 className="m-0">Please Enter the One-time Password to verify your account</h5>
        <span className="mobile-text" id="enterOTP"></span>
        <div className="digit-group d-flex flex-row mt-5" id="otpno" data-autosubmit="false" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
          {otpValues.map((value, index) => (
            <input
              key={index}
              type="number"
              className="form-control"
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              maxLength="1"
              ref={inputRefs.current[index]}
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
              onClick={handleVerifyOtp}
            >
              Verify
            </button> */}
          </div>
          <span id="otpVerifyAlert" style={{ color: 'red' }}></span>
        </div>
        <div className="text-center mt-5">
          <span className="d-block mobile-text">Don't receive the code?</span>
          <span className="font-weight-bold text-danger resendOTP" style={{ cursor: 'pointer' }} onClick={handleResendOtp}>
            Resend
          </span>
        </div>
      </div>
    </div>
  );
};

export default OTPCode;
