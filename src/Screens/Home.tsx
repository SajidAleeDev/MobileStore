import React from "react";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

function Home({ Children }: { Children: React.ReactNode }) {
  return (
    <>
      <TopHeader />
      <Header />
      <Menu />
      {Children}
      <div>footer</div>
    </>
  );
}

export default Home;
