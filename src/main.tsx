import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'animate.css'
import App from "./App.tsx";
import "remixicon/fonts/remixicon.css";
import { GlobalUseContextProvider } from "./Context/context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalUseContextProvider>
      <App />
    </GlobalUseContextProvider>
  </StrictMode>
);
