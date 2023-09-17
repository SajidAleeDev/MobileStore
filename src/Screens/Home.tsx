import BigButton from "@/components/BigButton";
import Carouse from "@/components/Carouse";
import ProducProvider from "@/components/ProducProvider";

function Home() {
  return (
    <>
      <Carouse />
      <BigButton />
      <ProducProvider
        NavigationTitle="/smartphones"
        title="All Product"
        Product
      />
      <ProducProvider
        NavigationTitle="/smartphones"
        title="Bill Payment"
        BILLPayment
      />
      <ProducProvider
        NavigationTitle="/Topcategories"
        title="Top Categories"
        TopCategories
      />
    </>
  );
}

export default Home;
