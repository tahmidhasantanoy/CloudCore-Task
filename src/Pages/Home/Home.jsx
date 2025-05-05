import AllProducts from "../../Components/AllProducts";
import Features from "../../Components/Features";
import SatisfactionBanner from "../../Components/SatisfactionBanner";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <AllProducts />
      <Features />
      <SatisfactionBanner />
    </>
  );
};

export default Home;
