import React, { useContext, useState } from "react";
import Master from "../../utils/Master";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import POSHeader from "./POSHeader";

const POS = () => {
  const { setposphno, posphno,setuserid,userid } = useContext(Master);
  const [ishovered, setishovered] = useState(false);
  const [buttonclicked, setbuttonclicked] = useState(false);
  const navigate = useNavigate();
  const handleclick = () => {
    if (!buttonclicked) {
      axios.get(`http://localhost/asiatech/?rest_route=/shakti/v1/register&username=${posphno.current}&shakti=1234`)
        .then(response => {
          console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
          console.log("Success: ", response.data.success);

          if(response.data.success){
            console.log("ttttttttttttttttttttttttttttttttttttttttttttt: ", response.data.ID);

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
    <div className="POS">
        {/* <div className="POS-header"> */}
        <POSHeader/>
        {/* </div> */}
        <div className="POS-body">

        </div>
    </div>
  );
}

export default POS;
