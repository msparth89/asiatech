import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import {MasterContext} from './utils/Master';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<BrowserRouter>
<MasterContext>
  <Routes>
    <Route path="/*" element={<App />} />
  </Routes>
</MasterContext>
</BrowserRouter>



);


