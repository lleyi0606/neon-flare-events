import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Sarah Chen",
      title: "Chief Marketing Officer",
      company: "TechFlow Inc.",
      bio: "15+ years transforming brands through data-driven marketing strategies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      title: "Digital Strategy Director",
      company: "Innovation Labs",
      bio: "Award-winning strategist specializing in AI-powered marketing solutions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Zhang",
      title: "Growth Marketing Lead",
      company: "StartupGrow",
      bio: "Scaled 50+ startups from seed to unicorn status through innovative growth tactics.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      title: "Brand Experience Expert",
      company: "Creative Studio",
      bio: "Crafting memorable brand experiences for Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-neon-orange glow-orange">Speakers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn from industry leaders who are shaping the future of marketing and driving innovation across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="group relative bg-dark-surface rounded-xl p-6 border border-border hover:border-neon-orange/30 transition-all duration-300 hover:scale-105 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Speaker Image */}
              <div className="relative mb-6">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-neon-orange/30 group-hover:border-neon-orange transition-colors"
                />
                <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>

              {/* Speaker Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-neon-orange transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-neon-orange font-medium mb-1">
                  {speaker.title}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {speaker.company}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {speaker.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full border border-border hover:border-neon-orange hover:bg-neon-orange/10 transition-all duration-300">
                    <Linkedin size={16} className="text-muted-foreground hover:text-neon-orange" />
                  </button>
                  <button className="p-2 rounded-full border border-border hover:border-neon-orange hover:bg-neon-orange/10 transition-all duration-300">
                    <Twitter size={16} className="text-muted-foreground hover:text-neon-orange" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="neon" className="px-8 py-3">
            View All Speakers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;