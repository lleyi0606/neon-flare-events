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
    ceremony: "bg-gold/20 text-gold",
    reception: "bg-rose-500/20 text-rose-400",
    dinner: "bg-amber-500/20 text-amber-400",
    cocktails: "bg-purple-500/20 text-purple-400",
    brunch: "bg-orange-500/20 text-orange-400",
    activity: "bg-green-500/20 text-green-400"
  };

  return (
    <div className="relative bg-dark-surface transition-all duration-300 hover:bg-dark-surface/80">
      <div className="flex items-center gap-6 p-6">
        {/* Time Block */}
        <div className="flex-shrink-0 text-center min-w-[120px]">
          <div className="text-gold font-bold text-lg">{time}</div>
          {featured && (
            <div className="bg-gradient-to-r from-gold to-gold-light px-2 py-1 rounded-full text-white text-xs font-bold flex items-center justify-center gap-1 mt-2">
              <Heart size={10} />
              SPECIAL
            </div>
          )}
        </div>

        {/* Event Content */}
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-heading text-xl font-bold text-foreground">
              {title}
            </h3>
            <div className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${typeColors[type]}`}>
              {type}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-3 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-gold" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users2 size={16} className="text-gold" />
              <span>All guests welcome</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
