import { Heart, Users2 } from "lucide-react";

const WeddingParty = () => {
  const weddingParty = [
    {
      name: "Emma Johnson",
      role: "Maid of Honor",
      relationship: "Sister of the Bride",
      bio: "Sarah's younger sister and best friend who will be by her side on the big day.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Best Man",
      relationship: "College Roommate",
      bio: "Michael's best friend since college and the one who introduced him to Sarah.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Chen",
      role: "Bridesmaid",
      relationship: "Best Friend",
      bio: "Sarah's closest friend from work who has been there through everything.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Martinez",
      role: "Groomsman",
      relationship: "Brother of the Groom",
      bio: "Michael's older brother who has always been his role model and mentor.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="wedding-party" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-pink-400">Wedding Party</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the special people who will be standing with us as we say "I do" - our closest family and friends who have been part of our journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {weddingParty.map((person, index) => (
            <div 
              key={index} 
              className="group relative bg-dark-surface rounded-xl p-6 border border-border hover:border-pink-400/30 transition-all duration-300 hover:scale-105 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Person Image */}
              <div className="relative mb-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-pink-400/30 group-hover:border-pink-400 transition-colors"
                />
                <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-pink-400/20 to-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Person Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-pink-400 transition-colors">
                  {person.name}
                </h3>
                <p className="text-pink-400 font-medium mb-1">
                  {person.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {person.relationship}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {person.bio}
                </p>

                {/* Heart Icon */}
                <div className="flex justify-center">
                  <div className="p-2 rounded-full border border-pink-400/30 bg-pink-400/10">
                    <Heart size={16} className="text-pink-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-pink-400/10 border border-pink-400/30 rounded-lg">
            <Users2 className="text-pink-400" size={20} />
            <span className="text-pink-400 font-medium">Our Complete Wedding Party</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingParty;
