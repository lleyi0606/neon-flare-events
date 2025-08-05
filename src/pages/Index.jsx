import LeftNavigation from "@/components/LeftNavigation";
import Hero from "@/components/Hero";
import Schedule from "@/components/Events";
import People from "@/components/People";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import RSVP from "@/components/RSVP";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LeftNavigation />
      <div className="ml-20">
        <main>
          <Hero />
          <Schedule />
          <People />
          <Location />
          <FAQ />
          <RSVP />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
