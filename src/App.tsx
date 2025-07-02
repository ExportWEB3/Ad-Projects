
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landing";
import RegisterPage from "./Pages/register";
import LoginPage from "./Pages/login";
import DashboardPage from "./Pages/dashboard";
import OtpPage from "./Pages/otp";
import ForgotPassPage from "./Pages/forgotPass";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={< LoginPage />} />
        <Route path="/dashboard" element={< DashboardPage />} />
        <Route path="/otp" element={< OtpPage />} />
        <Route path="/forgot/password" element={< ForgotPassPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
