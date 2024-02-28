import React, { useContext, useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Master from "../../utils/Master";
import axios from "axios";
import './OtpLogin.css';
import { useNavigate } from "react-router-dom";

const OtpLogin = () => {
  const { setposphno, posphno,setuserid,userid } = useContext(Master);
  const [ishovered, setishovered] = useState(false);
  const [buttonclicked, setbuttonclicked] = useState(false);
  const navigate = useNavigate();

  const handleclick = () => {
    if (!buttonclicked) {

      axios.get(`http://localhost/asiatech/back/?rest_route=/shakti/v1/register&username=${posphno}&shakti=1234&method=post`)
        .then(response => {
          if(response.data.success){
            setuserid(response.data.ID);
           setposphno (response.data.phone_number)
            navigate("/otpcode");
          }else{
            setposphno("")
          }
        })
        .catch(error => {
          console.error("API call error:", error);
        });
      setbuttonclicked(true);
    }
  };

  function changephonenumber(num)
  {
    if((num+"")[0]=="+"){
      setposphno(num.substring(1, num.length-1))
    }else{
      setposphno(num);
    }
  }

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
                value={posphno}
                onChange={(e) => setposphno(e)}
              />
            </div>
            <div className={`mt-4 btn-container ${ishovered ? 'hovered' : ''}`}>
              <input
                type="button"
                className="btn btn-primary"
                onClick={handleclick}
                onMouseEnter={() => setishovered(true)}
                onMouseLeave={() => setishovered(false)}
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
