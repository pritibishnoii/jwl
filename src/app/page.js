import Hero from "../components/Hero";
import MiddleCards from "../components/MiddleCards";
import Cards from "../components/Cards";
import Footer from "../components/Footer";



export default function Home () {
  return (
    <div className="w-full h-full ">
      <Hero />
      <MiddleCards />
      <Cards />
      <Footer />
    </div>
  );
}
