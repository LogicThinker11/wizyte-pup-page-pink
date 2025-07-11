import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dog-training.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Struggling to Train Your Dog?{" "}
              <span className="text-primary">Get Expert Tips & Tools</span>{" "}
              That Actually Work
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              From barking to biting, we help pet parents build better behavior 
              with proven training methods and trusted tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-hero text-lg px-8 py-4">
                📘 Free Training Guide
              </Button>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                🎥 Best Dog Training Courses
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Happy dog with trainer" 
                className="w-full h-auto rounded-3xl shadow-soft"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;