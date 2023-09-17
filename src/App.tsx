import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./Screens/Cart";
import Home from "./Screens/Home";
import SmartPhones from "./Screens/SmartPhones";
import Loading from "./loaders/Loading";

const Provider = React.lazy(() => import("./providers/Provider"));
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Provider
          Children={
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/smartphones" element={<SmartPhones />} />
              <Route
                path="*"
                element={
                  <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl">404 Not Found</h1>
                  </div>
                }
              />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          }
        />
      </Suspense>
    </Router>
  );
}

export default App;
