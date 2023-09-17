import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import "./index.css";
import { ItemProvider } from "./providers/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ItemProvider>
          <App />
        </ItemProvider>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);
