import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Add CSS for vertical text
const verticalTextStyle = {
  writingMode: 'vertical-rl',
  textOrientation: 'mixed'
};

const LeftNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Events", href: "#events" },
    { name: "Wedding Party", href: "#wedding-party" },
    { name: "Location", href: "#location" },
    { name: "RSVP", href: "#rsvp" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-20 bg-background/95 backdrop-blur-sm border-r border-border flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-border">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-light rounded-lg flex items-center justify-center">
            <Heart className="text-white w-5 h-5" />
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground" style={verticalTextStyle}>S&M</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-2">
        <ul className="space-y-4">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full px-2 py-4 rounded-lg transition-all duration-300 relative ${
                    isActive
                      ? 'bg-gold/20 text-gold border-l-4 border-gold font-medium'
                      : 'text-muted-foreground hover:text-gold hover:bg-gold/10'
                  }`}
                  title={item.name}
                >
                  <span className="text-sm whitespace-nowrap" style={verticalTextStyle}>
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* CTA Buttons */}
      <div className="p-2 border-t border-border space-y-2">
        <Button 
          variant="ghost" 
          size="sm"
          className="w-full h-12 text-muted-foreground hover:text-gold p-2"
          title="Our Story"
        >
          <span className="text-xs" style={verticalTextStyle}>Story</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="w-full h-12 border-gold text-gold hover:bg-gold hover:text-white p-2"
          title="RSVP Now"
        >
          <span className="text-xs" style={verticalTextStyle}>RSVP</span>
        </Button>
      </div>
    </aside>
  );
};

export default LeftNavigation;
