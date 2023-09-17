import React from "react";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

function Provider({ Children }: { Children: React.ReactNode }) {
  return (
    <>
      <TopHeader />
      <Header />
      <Menu />
      {Children}
      <Footer />
    </>
  );
}

export default Provider;
