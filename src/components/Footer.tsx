import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">EVENTPRO</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Creating exceptional marketing conferences that inspire, educate, and connect industry professionals worldwide.
            </p>
            <div className="flex gap-4">
              <button className="p-2 rounded-full border border-border hover:border-neon-orange hover:bg-neon-orange/10 transition-all duration-300">
                <Linkedin size={20} className="text-muted-foreground hover:text-neon-orange" />
              </button>
              <button className="p-2 rounded-full border border-border hover:border-neon-orange hover:bg-neon-orange/10 transition-all duration-300">
                <Twitter size={20} className="text-muted-foreground hover:text-neon-orange" />
              </button>
              <button className="p-2 rounded-full border border-border hover:border-neon-orange hover:bg-neon-orange/10 transition-all duration-300">
                <Instagram size={20} className="text-muted-foreground hover:text-neon-orange" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About EventPro", href: "#about" },
                { name: "Speakers", href: "#speakers" },
                { name: "Schedule", href: "#schedule" },
                { name: "Workshops", href: "#workshops" },
                { name: "Sponsors", href: "#sponsors" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-neon-orange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "FAQ", href: "#faq" },
                { name: "Contact Us", href: "#contact" },
                { name: "Tickets", href: "#tickets" },
                { name: "Venue Info", href: "#venue" },
                { name: "Accessibility", href: "#accessibility" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-neon-orange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-neon-orange mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Moscone Center<br />
                  747 Howard St<br />
                  San Francisco, CA 94103
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-neon-orange flex-shrink-0" />
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-neon-orange flex-shrink-0" />
                <p className="text-muted-foreground">hello@eventpro.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-dark-surface rounded-xl p-8 mb-12 border border-border">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on speakers, workshops, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-neon-orange transition-colors"
              />
              <Button variant="neon" className="px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 EventPro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-neon-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-orange transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-orange transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;