import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Heart, Instagram, Camera } from "lucide-react";
import Location from "./Location";

const Footer = () => {
  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container mx-auto px-6 py-16">

        <Location />

        {/* RSVP Section */}
        <section id="rsvp" className="bg-dark-surface rounded-xl p-8 mb-12 border border-gold/30">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
              Please RSVP by May 15th
            </h3>
            <p className="text-muted-foreground mb-6">
              We can't wait to celebrate with you! Please let us know if you'll be joining us for our special weekend.
            </p>
            <Button variant="outline" className="px-8 py-3 border-gold text-gold hover:bg-gold hover:text-white">
              RSVP Now
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Couple Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg flex items-center justify-center">
                <Heart className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-foreground">Sarah & Michael</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're so excited to celebrate our special day with all of our favorite people. Thank you for being part of our love story.
            </p>
            <div className="flex gap-4">
              <button className="p-2 rounded-full border border-border hover:border-gold hover:bg-gold/10 transition-all duration-300">
                <Instagram size={20} className="text-muted-foreground hover:text-gold" />
              </button>
              <button className="p-2 rounded-full border border-border hover:border-gold hover:bg-gold/10 transition-all duration-300">
                <Camera size={20} className="text-muted-foreground hover:text-gold" />
              </button>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-foreground">Important Info</h3>
            <ul className="space-y-3">
              {[
                { name: "Wedding Events", href: "#events" },
                { name: "Wedding Party", href: "#wedding-party" },
                { name: "Travel & Accommodations", href: "#travel" },
                { name: "Gift Registry", href: "#registry" },
                { name: "RSVP", href: "#rsvp" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-foreground">Wedding Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Napa Valley Resort<br />
                  1234 Vineyard Drive<br />
                  Napa Valley, CA 94558
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <p className="text-muted-foreground">+1 (555) 123-LOVE</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <p className="text-muted-foreground">hello@sarahandmichael.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-gold" /> by Sarah & Michael • June 2024
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-muted-foreground">#SarahAndMichael2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
