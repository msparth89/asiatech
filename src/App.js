// App.js
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Role from './components/Role';
import OtpLogin from './components/OtpLogin';
import OTPCode from './components/OTPCode';
import Master from "./utils/Master";
import POS from './components/pos/POS';
import Settings from './components/settings/Settings';

const App = () => {
  const { setotp, phonenumber, userid, roles, setroles } = useContext(Master);
  const idletimeoutduration = 500 * 1000; // 5 seconds for testing; adjust as needed
  let idletimeout;
  const [otpcodenavigated, setotpcodenavigated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleidle = () => {
    if (!otpcodenavigated && (window.location.pathname !== '/otpcode' && window.location.pathname !== '/otplogin')) {
      // localStorage.setItem('prevlocation', window.location.pathname);
      // localStorage.setItem('located', true);
      axios
        .get(`http://localhost/asiatech/?rest_route=/shakti/v1/register&username=${phonenumber.current}&shakti=1234`)
        .then((response) => {
          if (response.data.success) {
            setotpcodenavigated(true);
            navigate('/otpcode', { state: { from: window.location.pathname } });
          }
        })
        .catch((error) => {
          console.error('API call error:', error);
        });
    }
  };

  const resetidletimer = () => {
    if (idletimeout) {
      clearTimeout(idletimeout);
    }

    idletimeout = setTimeout(() => {
      handleidle();
    }, idletimeoutduration);
  };

  const handleuseractivity = () => {
    resetidletimer();
  };

  // Attach event listeners for user activity
  useEffect(() => {
    document.addEventListener('mousemove', handleuseractivity);
    document.addEventListener('keydown', handleuseractivity);

    // Initialize idle timer
    resetidletimer();

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleuseractivity);
      document.removeEventListener('keydown', handleuseractivity);
      clearTimeout(idletimeout);
    };
  }, []);

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otplogin" element={<OtpLogin />} />
      <Route path="/otpcode" element={<OTPCode />} />
      <Route path="/pos" element={<POS />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/roles" element={<Role />} />
    </Routes>
  );
};

export default App;