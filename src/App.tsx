import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./loaders/Loading";

const Home = React.lazy(() => import("./Screens/Home"));
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Home
          Children={
            <Routes>
              <Route
                path="/"
                element={
                  <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl">Home</h1>
                  </div>
                }
              />
              <Route
                path="/smartphones"
                element={
                  <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl">Smart Phones</h1>
                  </div>
                }
              />
              <Route
                path="*"
                element={
                  <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl">404 Not Found</h1>
                  </div>
                }
              />
            </Routes>
          }
        />
      </Suspense>
    </Router>
  );
}

export default App;
