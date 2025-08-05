import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Speakers from "@/components/Speakers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Events />
      <Speakers />
      <Footer />
    </div>
  );
};

export default Index;
