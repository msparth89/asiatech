// App.js
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DefineRoles from './components/DefineRoles';
import OtpLogin from './components/OtpLogin';
import OTPCode from './components/OTPCode';
import Master from "./utils/Master";
import POS from './components/pos/POS';
import Settings from './components/settings/Settings';

const App = () => {
  const { setOTP, PhoneNumber, UserID, Roles, setRoles } = useContext(Master);
  const idleTimeoutDuration = 5 * 1000; // 5 seconds for testing; adjust as needed
  let idleTimeout;
  const [otpCodeNavigated, setOtpCodeNavigated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleIdle = () => {
    console.log('User is idle');
    if (!otpCodeNavigated && (window.location.pathname !== '/otpcode' && window.location.pathname !== '/otplogin')) {
      // localStorage.setItem('prevlocation', window.location.pathname);
      // localStorage.setItem('located', true);
      axios
        .get(`http://localhost/asiatech/?rest_route=/shakti/v1/register&username=${PhoneNumber.current}&shakti=1234`)
        .then((response) => {
          console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', response);
          console.log('Success: ', response.data.success);
          if (response.data.success) {
            setOtpCodeNavigated(true);
            console.log('ttttttttttttttttttttttttttttttttttttttttttttt: ', response.data.ID);
            navigate('/otpcode', { state: { from: window.location.pathname } });
          }
        })
        .catch((error) => {
          console.error('API call error:', error);
        });
    }
  };

  const resetIdleTimer = () => {
    if (idleTimeout) {
      clearTimeout(idleTimeout);
    }

    idleTimeout = setTimeout(() => {
      handleIdle();
    }, idleTimeoutDuration);
  };

  const handleUserActivity = () => {
    resetIdleTimer();
  };

  // Attach event listeners for user activity
  useEffect(() => {
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);

    // Initialize idle timer
    resetIdleTimer();

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
      clearTimeout(idleTimeout);
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
      <Route path="/roles" element={<DefineRoles />} />
    </Routes>
  );
};

export default App;
