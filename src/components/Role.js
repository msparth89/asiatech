// import React from 'react';
// import Navbar from './Navbar';

// class Defineroles extends React.Component {
//   constructor(props) {
//     super(props);
//     // Initialize state for the form fields
//     this.state = {
//       username: '',
//       password: '',
//       role: '',
//       phonenumber: '',
//       emailAddress: '',
//       adminId: '', // Additional fields for Admin role
//       adminAddress: '', // Additional fields for Admin role
//       adminPortId: '', // Additional fields for Admin role
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     // Handle form submission, e.g., send the data to a server or update state
//     // You can implement the logic for handling the form data here
//   };

//   handleRoleChange = (e) => {
//     const role = e.target.value;
//     this.setState({ role });
//   };

//   renderAdditionalFields = () => {
//     if (this.state.role === 'admin') {
//       return (
//         <div>
//           <div className="form-group">
//             <label htmlFor="adminId">Admin ID</label>
//             <input
//               type="text"
//               id="adminId"
//               className="form-control"
//               value={this.state.adminId}
//               onChange={(e) => this.setState({ adminId: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="adminAddress">Admin Address</label>
//             <input
//               type="text"
//               id="adminAddress"
//               className="form-control"
//               value={this.state.adminAddress}
//               onChange={(e) => this.setState({ adminAddress: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="adminPortId">Admin Port ID</label>
//             <input
//               type="text"
//               id="adminPortId"
//               className="form-control"
//               value={this.state.adminPortId}
//               onChange={(e) => this.setState({ adminPortId: e.target.value })}
//               required
//             />
//           </div>
//         </div>
//       );
//     }
//     if (this.state.role === 'user') {
//         return (
//           <div>
//             <div className="form-group">
//               <label htmlFor="adminId">User ID</label>
//               <input
//                 type="text"
//                 id="userid"
//                 className="form-control"
//                 value={this.state.userid}
//                 onChange={(e) => this.setState({ userid: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="userAddress">User Address</label>
//               <input
//                 type="text"
//                 id="userAddress"
//                 className="form-control"
//                 value={this.state.userAddress}
//                 onChange={(e) => this.setState({ userAddress: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="userPortId">User Port ID</label>
//               <input
//                 type="text"
//                 id="userPortId"
//                 className="form-control"
//                 value={this.state.userPortId}
//                 onChange={(e) => this.setState({ userPortId: e.target.value })}
//                 required
//               />
//             </div>
//           </div>
//         );
//     }
//     if (this.state.role === 'business') {
//         return (
//           <div>
//             <div className="form-group">
//               <label htmlFor="businessId">Business ID</label>
//               <input
//                 type="text"
//                 id="businessId"
//                 className="form-control"
//                 value={this.state.businessId}
//                 onChange={(e) => this.setState({ businessId: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="businessAddress">Business Address</label>
//               <input
//                 type="text"
//                 id="businessAddress"
//                 className="form-control"
//                 value={this.state.businessAddress}
//                 onChange={(e) => this.setState({ businessAddress: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="businessPortId">Business Port ID</label>
//               <input
//                 type="text"
//                 id="businessPortId"
//                 className="form-control"
//                 value={this.state.businessPortId}
//                 onChange={(e) => this.setState({ businessPortId: e.target.value })}
//                 required
//               />
//             </div>
//           </div>
//         );
//     }
//     if (this.state.role === 'partner') {
//         return (
//           <div>
//             <div className="form-group">
//               <label htmlFor="partnerId">Partner ID</label>
//               <input
//                 type="text"
//                 id="partnerId"
//                 className="form-control"
//                 value={this.state.partnerId}
//                 onChange={(e) => this.setState({ partnerId: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="partnerAddress">Partner Address</label>
//               <input
//                 type="text"
//                 id="partnerAddress"
//                 className="form-control"
//                 value={this.state.partnerAddress}
//                 onChange={(e) => this.setState({ partnerAddress: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="partnerPortId">Partner Port ID</label>
//               <input
//                 type="text"
//                 id="partnerPortId"
//                 className="form-control"
//                 value={this.state.partnerPortId}
//                 onChange={(e) => this.setState({ partnerPortId: e.target.value })}
//                 required
//               />
//             </div>
//           </div>
//         );
//     }
//     if (this.state.role === 'seller') {
//         return (
//           <div>
//             <div className="form-group">
//               <label htmlFor="sellerId">Seller ID</label>
//               <input
//                 type="text"
//                 id="sellerId"
//                 className="form-control"
//                 value={this.state.sellerId}
//                 onChange={(e) => this.setState({ sellerId: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="sellerAddress">Seller Address</label>
//               <input
//                 type="text"
//                 id="sellerAddress"
//                 className="form-control"
//                 value={this.state.sellerAddress}
//                 onChange={(e) => this.setState({ sellerAddress: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="sellerPortId">Seller Port ID</label>
//               <input
//                 type="text"
//                 id="sellerPortId"
//                 className="form-control"
//                 value={this.state.sellerPortId}
//                 onChange={(e) => this.setState({ sellerPortId: e.target.value })}
//                 required
//               />
//             </div>
//           </div>
//         );
//     }
//     return null; // Return null if no additional fields should be rendered
//   };
//   render() {
//     return (  
//       <div>
//         <Navbar/>
//         <div className="container">
//         <h2 className="mt-5 mb-4">Define roles</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="form-control"
//               value={this.state.username}
//               onChange={(e) => this.setState({ username: e.target.value })}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               value={this.state.password}
//               onChange={(e) => this.setState({ password: e.target.value })}
//               required
//             />
//           </div>


//           <div className="form-group">
//             <label htmlFor="phonenumber">Phone Number</label>
//             <input
//               type="tel"
//               id="phonenumber"
//               className="form-control"
//               value={this.state.phonenumber}
//               onChange={(e) => this.setState({ phonenumber: e.target.value })}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="emailAddress">Email Address</label>
//             <input
//               type="email"
//               id="emailAddress"
//               className="form-control"
//               value={this.state.emailAddress}
//               onChange={(e) => this.setState({ emailAddress: e.target.value })}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="role">Role</label>
//             <select
//               id="role"
//               className="form-control"
//               value={this.state.role}
//               onChange={(e) => this.setState({ role: e.target.value })}
//               required
//             >
//               {/* Add options for different roles */}
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//               <option value="business">Business</option>
//               <option value="partner">Partner</option>
//               <option value="seller">Seller</option>
//             </select>
//           </div>


//           {this.renderAdditionalFields()} {/* Render additional fields conditionally */}
          
//           <button type="submit" className="btn btn-primary">
//             Save
//           </button>
//         </form>
//        </div>
//     </div>
//     );
//   }
// }

// export default Defineroles;




//////////////////////////////////////////////////////////////////////////////////////////////


import React, { useContext, useState } from "react";
import './Role.css';
import Master from "../utils/Master";
import axios from "axios";
// import './OtpLogin.css';
import { useNavigate } from "react-router-dom";
import select from 'react-select';
import Address from './Address';


const selectroles=[
  {
    name: 'Partner',
    value: 'partner',
    access:['admin','partner','manager','biller','picker']
    },
  {
     name: 'Business',
     value: 'business',
     access:['admin','partner','manager','biller','picker']
   },
   {
    name: 'Manager',
    value: 'manager',
    access:['admin','partner','manager','biller','picker']
  },
  {
    name: 'Biller',
    value: 'biller',
    access:['admin','partner','manager','biller','picker']
  },
  {
    name: 'Picker',
    link: 'picker',
    access:['admin','partner','manager','biller','picker']
  },


]

const options = ["Select an Option", "First Option", "Second Option", "Third Option"]

const Role = () => {
  const { phonenumberchange, phonenumber,setuserid, userid } = useContext(Master);
  const [ishovered, setishovered] = useState(false);
  const [buttonclicked, setbuttonclicked] = useState(false);
  const navigate = useNavigate();


  const [partnernumber,setpartnernumber]=useState({ value: 'Select an Option'})
  const [selectedrole,setselectedrole]=useState({ value: 'Select an Option'})
  const [businessnumber,setbusinessnumber]=useState({ value: 'Select an Option'})
  // const [PartnerNumber,setPartnerNumber]=useState({ value: 'Select an Option'})

  function changerole(value) {
    // event.preventDefault();
    // const { value } = e.target;
    setselectedrole(value);
  }

  return (
  <div className="roles">
  <div className="roles-search-input">
  <input type="number" /> 
  </div>
  <div className="roles-search-label">
  Search by phone number
  </div>
  
  <select value={selectedrole} onChange={(e) => changerole(e.target.value)} className="form-control">
        {selectroles.map(option => {
          return <option value={option.name} key={option.name} >{option.name}</option>
        })}
      </select>
  

      {
        (selectedrole =="Business") &&
        
        <>
        <input type="number"/>
              <div className="roles-search-label">
                Search by phone number
               </div>
        { 
}




<Address/>



</>

}
  </div>
  );
}

export default Role;