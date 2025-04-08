
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Index;
