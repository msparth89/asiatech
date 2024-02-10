import React, { useContext, useState } from "react";
import Master from "../utils/Master";
import axios from "axios";
import './Address.css';
import { useNavigate } from "react-router-dom";

const Address = () => {
  const { phonenumberchange, phonenumber,setuserid,userid } = useContext(Master);
  const [ishovered, setishovered] = useState(false);
  const [buttonclicked, setbuttonclicked] = useState(false);
  const navigate = useNavigate();

  const handleclick = () => {
    if (!buttonclicked) {

      axios.get(`http://localhost/asiatech/back/?rest_route=/shakti/v1/register&username=${phonenumber.current}&shakti=1234&method=post`)
        .then(response => {
          console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
          if(response.data.success){
            console.log("ttttttttttttttttttttttttttttttttttttttttttttt: ", response.data.ID);
            setuserid(response.data.ID);
           phonenumberchange (response.data.phone_number)
            navigate("/otpcode");
          }else{
            phonenumberchange("")
          }
        })
        .catch(error => {
          console.error("API call error:", error);
        });
      setbuttonclicked(true);
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
