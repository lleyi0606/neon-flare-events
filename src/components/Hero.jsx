import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Wedding"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-400/10 rounded-full blur-2xl animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Group 1 */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Heart className="text-pink-400 w-12 h-12" />
          </div>

          <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
            Sarah <span className="text-pink-400 italic" style={{ fontFamily: "'Pacifico', cursive" }}>&</span> Michael
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            You're invited to celebrate our love story
          </p>

          <hr className="mb-10 w-32 mx-auto border-t-2 border-pink-400" />
        </div>

        {/* Group 2 & 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Group 2 */}
          <div className="flex-1 max-w-md">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Join us for a weekend of celebration
            </h2>
            <p className="text-muted-foreground mb-6">
              A three-day celebration of love, family, and friendship.
            </p>
            <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white">
              View Events
            </Button>
          </div>

          {/* Group 3 */}
          <div className="flex-shrink-0 p-6 bg-dark-surface/70 border border-pink-400 rounded-lg space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-pink-400" size={20} />
              <span>June 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-pink-400" size={20} />
              <span>Napa Valley, CA</span>
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
