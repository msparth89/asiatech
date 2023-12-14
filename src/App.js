import React from "react";
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DefineRoles from "./components/DefineRoles";
import OtpLogin from "./components/OtpLogin";
import OTPCode from "./components/OTPCode";
import POS from "./components/pos/POS";
import Settings from "./components/settings/Settings";

// function App() {
//   return (
//     <div>
//       app
//     </div>
//   );
// }

class App extends React.Component {
  render() {
   return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otplogin" element={< OtpLogin/>} />
        <Route path="/otpcode" element={< OTPCode/>} />
        <Route path="/pos" element={< POS/>} />
        <Route path="/settings" element={< Settings/>} />
        {/* <Route path="/dashboard/:username" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/define-roles" element={<DefineRoles />} />
    </Routes>
   );
  }
 }

export default App;
