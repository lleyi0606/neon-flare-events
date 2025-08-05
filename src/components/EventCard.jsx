import { Button } from "@/components/ui/button";
import { Clock, MapPin, Heart, Users2 } from "lucide-react";

const EventCard = ({ 
  title, 
  description, 
  time, 
  location, 
  type, 
  featured = false 
}) => {
  const typeColors = {
    ceremony: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    reception: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    dinner: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    cocktails: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    brunch: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    activity: "bg-green-500/20 text-green-400 border-green-500/30"
  };

  return (
    <div className={`
      relative p-6 rounded-xl bg-dark-surface border transition-all duration-300 hover:scale-105 hover:shadow-card
      ${featured ? 'border-pink-400/50 shadow-lg shadow-pink-400/20' : 'border-border hover:border-pink-400/30'}
    `}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-400 to-rose-400 px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1">
          <Heart size={12} />
          SPECIAL
        </div>
      )}

      {/* Event Type */}
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-4 border ${typeColors[type]}`}>
        {type}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-pink-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Event Details */}
      <div className="space-y-2 mb-6 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock size={16} className="text-pink-400" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={16} className="text-pink-400" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users2 size={16} className="text-pink-400" />
          <span>All guests welcome</span>
        </div>
      </div>

      {/* Action Button */}
      <Button 
        variant="outline" 
        className={`w-full ${featured ? 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white' : 'border-border hover:border-pink-400 hover:text-pink-400'}`}
      >
        {featured ? "Mark Your Calendar" : "Add to Calendar"}
      </Button>
    </div>
  );
};

export default EventCard;
