import React from "react";
import { CircularProgress } from "@nextui-org/react";

function Loading() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <CircularProgress size="lg" aria-label="Loading..." color="success" />
    </div>
  );
}

export default Loading;
