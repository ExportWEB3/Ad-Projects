
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/landing";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
