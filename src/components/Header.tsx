import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">🐕 Wizyte</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#tools" className="text-foreground hover:text-primary transition-colors">Tools</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/auth" className="text-foreground hover:text-primary transition-colors">Admin</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button className="btn-hero">
              📘 Free Guide
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="py-4 space-y-4">
              <a href="#courses" className="block text-foreground hover:text-primary transition-colors">Courses</a>
              <a href="#tools" className="block text-foreground hover:text-primary transition-colors">Tools</a>
              <a href="#blog" className="block text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#about" className="block text-foreground hover:text-primary transition-colors">About</a>
              <a href="/auth" className="block text-foreground hover:text-primary transition-colors">Admin</a>
              <Button className="btn-hero w-full mt-4">
                📘 Free Guide
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;