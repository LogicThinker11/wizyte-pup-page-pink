import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Dog's Behavior?
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Join thousands of happy dog parents who've already discovered the joy of a well-trained companion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              📘 Get Free Guide
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-4 text-lg font-medium transition-all duration-300">
              🎥 Start Training Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;