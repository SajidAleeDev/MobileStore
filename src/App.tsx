import { ModeToggle } from "./components/ToggleMode";
import { Button } from "./components/ui/button";
import React, { Suspense } from "react";
const Admin = React.lazy(() =>
  delayforDemo2plusSec(() => import("./components/Admin"))
);
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <ModeToggle />{" "}
          {/* <-- This is depend on where i put and its icon only */}
          <Button>Click me</Button>
        </div>
        <Admin />
      </Suspense>
    </>
  );
}

export default App;

function delayforDemo2plusSec<T>(fn: () => Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, 2000);
  });
}
