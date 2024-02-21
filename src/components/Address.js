import React, { useContext, useState } from "react";
import Master from "../utils/Master";
import axios from "axios";
import './Address.css';
import { useNavigate } from "react-router-dom";

const Address = () => {
  const { phonenumberchange, phonenumber, setuserid, userid } = useContext(Master);
  const [ishovered, setishovered] = useState(false);
  const [buttonclicked, setbuttonclicked] = useState(false);
  const navigate = useNavigate();

  const handleclick = () => {
    if (!buttonclicked) {

      axios.get(`http://localhost/asiatech/back/?rest_route=/shakti/v1/register&username=${phonenumber.current}&shakti=1234&method=post`)
        .then(response => {
          console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
          if (response.data.success) {
            console.log("ttttttttttttttttttttttttttttttttttttttttttttt: ", response.data.ID);
            setuserid(response.data.ID);
            phonenumberchange(response.data.phone_number)
            navigate("/otpcode");
          } else {
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
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Business Id</label>
              <input type="text" className="form-control" name="businessid" id="shipping-first-name" placeholder="Business Id" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Tax Id</label>
              <input type="text" className="form-control" name="taxid" id="shipping-first-name" placeholder="Tax Id" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Parent Id</label>
              <input type="text" className="form-control" name="parentid" id="shipping-first-name" placeholder="Parent Id" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Status</label>
              <input type="text" className="form-control" name="status" id="shipping-first-name" placeholder="Status" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="name" id="shipping-first-name" placeholder="Name" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Type</label>
              <input type="text" className="form-control" name="type" id="shipping-first-name" placeholder="Type" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Address 1</label>
              <input type="text" className="form-control" name="address1" id="shipping-first-name" placeholder="Address 1" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Address 2</label>
              <input type="text" className="form-control" name="address2" id="shipping-first-name" placeholder="Address 2" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>State</label>
              <input type="text" className="form-control" name="state" id="shipping-first-name" placeholder="State" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Country</label>
              <input type="text" className="form-control" name="country" id="shipping-first-name" placeholder="Country" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Pincode</label>
              <input type="text" className="form-control" name="pincode" id="shipping-first-name" placeholder="Pincode" required />
            </div>
          </div>
          <div class="col-12 col-sm-3">
            <div class="form-group">
              <label>Towncity</label>
              <input type="text" className="form-control" name="towncity" id="shipping-first-name" placeholder="Towncity" required />
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" name="submit-business-form" id="submit-business-form" className="btn btn-primary btn-sm col-sm-1 mt-2" style={{float: "right"}}>Create</button>
          </div>
        </div>
      </form>

      {/* ////////////////////////////////////////////////////////////// */}

    </div>
  );
}

export default Address;
