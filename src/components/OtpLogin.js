import React, { useContext, useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Master from "../utils/Master";
import './OtpLogin.css'; // Import the CSS file for styling

const OtpLogin = () => {
  const { phoneNumberChange, PhoneNumber } = useContext(Master);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ padding: '2%', backgroundColor: 'rgb(248, 248, 248)', border: 'none'}}>
        <div className="card-body">
          <form action="">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="mb-5">
                <PhoneInput
                  style={{fontSize: 'xx-large'}}
                  required
                  placeholder="Enter phone number"
                  defaultCountry="IN"
                  value={PhoneNumber.current}
                  onChange={(e) => phoneNumberChange(e)}
                />
              </div>
              <div className={`mt-4 btn-container ${isHovered ? 'hovered' : ''}`}>
                <input
                  type="submit"
                  className="btn btn-primary"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{width: '25%', height: '50px'}}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpLogin;
