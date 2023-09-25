import React from "react";
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

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
        <Route path="/dashboard/:username" element={<Dashboard />} />
    </Routes>
   );
  }
 }

export default App;
