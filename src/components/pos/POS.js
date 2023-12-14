import React, { useContext, useState } from "react";
import Master from "../../utils/Master";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import POSHeader from "./POSHeader";

const POS = () => {
  const { phoneNumberChange, PhoneNumber,setUserID,UserID } = useContext(Master);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (!buttonClicked) {
      axios.get(`http://localhost/asiatech/?rest_route=/shakti/v1/register&username=${PhoneNumber.current}&shakti=1234`)
        .then(response => {
          console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
          console.log("Success: ", response.data.success);

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

  function changePhoneNumber(num)
  {
    if((num+"")[0]=="+"){
      phoneNumberChange(num.substring(1, num.length-1))
    }else{
      phoneNumberChange(num);
    }
  }

  return (
    <div className="POS">
        <div className="POS-header">
        <POSHeader/>
        </div>
        <div className="POS-body">

        </div>
    </div>
  );
}

export default POS;
