import LeftNavigation from "@/components/LeftNavigation";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import People from "@/components/People";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LeftNavigation />
      <div className="ml-20">
        <main>
          <Hero />
          <Events />
          <People />
          <FAQ />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
