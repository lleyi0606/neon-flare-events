import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Event Label */}
          <div className="inline-block mb-6 px-4 py-2 bg-dark-surface border border-neon-orange/30 rounded-full">
            <span className="text-neon-orange font-medium text-sm uppercase tracking-wider">
              EVENTPRO 2024 MARKETING CONFERENCE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            The <span className="text-neon-orange glow-orange italic">Best</span> Marketing
            <br />
            Conference of 2024
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Join industry leaders, innovative minds, and marketing professionals for three days of insights, networking, and breakthrough strategies.
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-muted-foreground animate-slide-up">
            <div className="flex items-center gap-2">
              <Calendar className="text-neon-orange" size={20} />
              <span>March 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-neon-orange" size={20} />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-neon-orange" size={20} />
              <span>500+ Attendees</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button variant="hero" className="min-w-[200px]">
              Get Your Tickets
            </Button>
            <Button variant="outline_neon" className="min-w-[200px]">
              View Schedule
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-orange mb-2">50+</div>
              <div className="text-muted-foreground">Expert Speakers</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-orange mb-2">20+</div>
              <div className="text-muted-foreground">Interactive Workshops</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-neon-orange mb-2">3</div>
              <div className="text-muted-foreground">Days of Innovation</div>
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