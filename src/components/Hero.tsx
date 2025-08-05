import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Conference"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-neon-orange/20 rounded-full blur-3xl animate-pulse-orange"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-neon-orange/10 rounded-full blur-2xl animate-pulse-orange"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Group 1 */}
        <div className="max-w-4xl">
          <span className="block mb-4 px-4 py-2 bg-dark-surface border border-neon-orange/30 rounded-full text-neon-orange font-normal text-sm uppercase tracking-wider">
            OHY 2035 MARKETING CONFERENCE
          </span>

          <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
            The <span className="text-neon-orange italic" style={{ fontFamily: "'Pacifico', cursive" }}>Best</span> Marketing Conference of 2035
          </h1>

          <hr className="mb-10 w-full border-t border-neon-orange" />
        </div>

        {/* Group 2 & 3 */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Group 2 */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              What Marketers of the Future Need to Know
            </h2>
            <p className="text-muted-foreground mb-6">
              We're going hybrid this time.
            </p>
            <Button variant="outline" className="border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black">Check it out</Button>
          </div>

          {/* Group 3 */}
          <div className="flex-shrink-0 p-6 bg-dark-surface/70 border border-neon-orange rounded-lg space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-neon-orange" size={20} />
              <span>March 15-17, 2035</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-neon-orange" size={20} />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>



      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;