import React, { useContext, useState } from "react";
import Master from "../utils/Master";
import axios from "axios";
import './Address.css';
import { useNavigate } from "react-router-dom";

const Address = () => {
  const { phoneNumberChange, PhoneNumber,setUserID,UserID } = useContext(Master);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!buttonClicked) {

      axios.get(`http://localhost/asiatech/back/?rest_route=/shakti/v1/register&username=${PhoneNumber.current}&shakti=1234&method=post`)
        .then(response => {
          console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
          if(response.data.success){
            console.log("ttttttttttttttttttttttttttttttttttttttttttttt: ", response.data.ID);
            setUserID(response.data.ID);
           phoneNumberChange (response.data.phone_number)
            navigate("/otpcode");
          }else{
            phoneNumberChange("")
          }
        })
        .catch(error => {
          console.error("API call error:", error);
        });
      setButtonClicked(true);
    }
  };

 

  return (
    <div className="Address">


        {/* /////////////////////////////////////////////////// */}

          <input type="text" name="businessid" id="shipping-first-name" placeholder="First name" required />

          <input type="text" name="taxid" id="shipping-first-name" placeholder="First name" required />

          <input type="text" name="parentid" id="shipping-first-name" placeholder="First name" required />

          <input type="text" name="status" id="shipping-first-name" placeholder="First name" required />

          <input type="text" name="name" id="shipping-first-name" placeholder="First name" required />

          <input type="text" name="type" id="shipping-first-name" placeholder="First name" required />

          <input type="text" name="address1" id="shipping-first-name" placeholder="First name" required />

          <input type="text" name="address2" id="shipping-first-name" placeholder="First name" required />
          <input type="text" name="state" id="shipping-first-name" placeholder="First name" required />
          <input type="text" name="country" id="shipping-first-name" placeholder="First name" required />
          <input type="text" name="pincode" id="    shipping-first-name" placeholder="First name" required />
          <input type="text" name="towncity" id="shipping-first-name" placeholder="First name" required />
    



        {/* ////////////////////////////////////////////////////////////// */}

    </div>
  );
}

export default Address;
