import React, { useContext, useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Master from "../utils/Master";
import axios from "axios";
import './OtpLogin.css';

const OtpLogin = () => {
  const { phoneNumberChange, PhoneNumber } = useContext(Master);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    if (!buttonClicked) {
      axios.get(`http://localhost/asiatech/?rest_route=/shakti/v1/register&username=${PhoneNumber.current}&shakti=1234`/* , { phoneNumber: PhoneNumber.current } */)
        .then(response => {
          console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
          console.log("Success: ", response.success);
        })
        .catch(error => {
          console.error("API call error:", error);
        });
      setButtonClicked(true);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ padding: '2%', backgroundColor: 'rgb(248, 248, 248)', border: 'none' }}>
        <div className="card-body">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="mb-5">
              <PhoneInput
                style={{ fontSize: 'xx-large' }}
                required
                placeholder="Enter phone number"
                defaultCountry="IN"
                value={PhoneNumber.current}
                onChange={(e) => phoneNumberChange(e)}
              />
            </div>
            <div className={`mt-4 btn-container ${isHovered ? 'hovered' : ''}`}>
              <input
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ width: '25%', height: '50px' }}
                value= 'Get OTP'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpLogin;
