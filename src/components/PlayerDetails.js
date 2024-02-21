import React, { useContext, useState } from "react";
import Master from "../utils/Master";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlayerDetails = () => {
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
      <form action="" id="BusinessDetailsForm">
        <div class="row form-row">
          <div class="col-12 col-sm-2">
            <div class="form-group">
              <label>Citizen Id</label>
              <div style={{width: "100%", display: "flex"}}>
                <input type="text" className="form-control" name="citizenid" id="player-citizen-id" placeholder="Citizen Id" required />
                <button type="submit" name="submit-business-form" id="submit-business-form" className="btn btn-primary btn-sm" style={{marginLeft: "2%"}}>Create</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* ////////////////////////////////////////////////////////////// */}

    </div>
  );
}

export default PlayerDetails;
