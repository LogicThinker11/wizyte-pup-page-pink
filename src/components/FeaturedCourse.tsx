import { Button } from "@/components/ui/button";
import { Star, CheckCircle } from "lucide-react";

const FeaturedCourse = () => {
  const benefits = [
    "Stop barking, jumping, and pulling on walks",
    "Proven methods used by professional trainers",
    "Works for puppies and adult dogs",
    "30-day money-back guarantee",
    "Lifetime access to course materials"
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Top Recommended Online Course
            </h2>
          </div>
          
          <div className="card-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Course Info */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(4.8/5 from 2,340 reviews)</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Complete Dog Training System
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Transform your dog's behavior in just 30 days with this comprehensive 
                  online training program. No more frustration, just results.
                </p>
                
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="btn-hero w-full md:w-auto">
                  👉 Learn More
                </Button>
              </div>
              
              {/* Course Preview */}
              <div className="relative">
                <div className="bg-primary-light rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">6 Week Program</h4>
                  <p className="text-sm text-muted-foreground">Step-by-step video lessons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;