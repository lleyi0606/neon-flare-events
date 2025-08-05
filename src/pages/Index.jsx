import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import WeddingParty from "@/components/Speakers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Events />
      <WeddingParty />
      <Footer />
    </div>
  );
};

export default Index;
