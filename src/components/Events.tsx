import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      title: "AI-Driven Marketing Strategies",
      description: "Discover how artificial intelligence is revolutionizing marketing campaigns and customer engagement. Learn practical implementation strategies from industry experts.",
      date: "March 15",
      time: "9:00 AM - 12:00 PM",
      location: "Main Hall A",
      capacity: "150 attendees",
      type: "keynote" as const,
      featured: true
    },
    {
      title: "Social Media Analytics Workshop",
      description: "Hands-on workshop covering advanced social media analytics tools and techniques to measure ROI and optimize your social presence.",
      date: "March 15",
      time: "2:00 PM - 5:00 PM",
      location: "Workshop Room 1",
      capacity: "50 attendees",
      type: "workshop" as const
    },
    {
      title: "Future of Digital Marketing Panel",
      description: "Industry leaders discuss emerging trends, challenges, and opportunities in the evolving digital marketing landscape.",
      date: "March 16",
      time: "10:00 AM - 11:30 AM",
      location: "Conference Room B",
      capacity: "200 attendees",
      type: "panel" as const
    },
    {
      title: "Brand Storytelling Masterclass",
      description: "Learn the art of crafting compelling brand narratives that resonate with your audience and drive engagement across all channels.",
      date: "March 16",
      time: "1:00 PM - 4:00 PM",
      location: "Creative Studio",
      capacity: "75 attendees",
      type: "workshop" as const,
      featured: true
    },
    {
      title: "Data Privacy & Marketing Ethics",
      description: "Navigate the complex landscape of data privacy regulations and ethical marketing practices in the digital age.",
      date: "March 17",
      time: "9:00 AM - 10:30 AM",
      location: "Main Hall B",
      capacity: "300 attendees",
      type: "keynote" as const
    },
    {
      title: "Growth Hacking Techniques",
      description: "Intensive workshop on proven growth hacking strategies and tools used by successful startups and established companies.",
      date: "March 17",
      time: "2:30 PM - 5:30 PM",
      location: "Innovation Lab",
      capacity: "40 attendees",
      type: "workshop" as const
    }
  ];

  return (
    <section id="workshops" className="py-20 bg-darker-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-neon-orange glow-orange">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of workshops, keynotes, and panel discussions designed to elevate your marketing expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <EventCard {...event} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline_neon" className="px-8 py-3">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;