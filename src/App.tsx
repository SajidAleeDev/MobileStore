import React, { Suspense } from "react";
import { LazyLoading } from "./loaders";
import Loading from "./loaders/Loading";
const Home = React.lazy(
  () => LazyLoading(() => import("./Screens/Home")) as Promise<any>
);
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </>
  );
}

export default App;
