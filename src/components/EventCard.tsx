import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  type: "workshop" | "keynote" | "panel";
  featured?: boolean;
}

const EventCard = ({ 
  title, 
  description, 
  date, 
  time, 
  location, 
  capacity, 
  type, 
  featured = false 
}: EventCardProps) => {
  const typeColors = {
    workshop: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    keynote: "bg-neon-orange/20 text-neon-orange border-neon-orange/30",
    panel: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  };

  return (
    <div className={`
      relative p-6 rounded-xl bg-dark-surface border transition-all duration-300 hover:scale-105 hover:shadow-card
      ${featured ? 'border-neon-orange/50 shadow-neon' : 'border-border hover:border-neon-orange/30'}
    `}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-primary px-3 py-1 rounded-full text-black text-xs font-bold">
          FEATURED
        </div>
      )}

      {/* Event Type */}
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border ${typeColors[type]}`}>
        {type}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-neon-orange transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Event Details */}
      <div className="space-y-2 mb-6 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock size={16} className="text-neon-orange" />
          <span>{date} • {time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={16} className="text-neon-orange" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users size={16} className="text-neon-orange" />
          <span>{capacity}</span>
        </div>
      </div>

      {/* Action Button */}
      <Button 
        variant={featured ? "neon" : "outline_neon"} 
        className="w-full"
      >
        {featured ? "Reserve Your Spot" : "Learn More"}
      </Button>
    </div>
  );
};

export default EventCard;