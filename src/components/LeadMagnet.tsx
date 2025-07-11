import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, email });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card-soft">
            <div className="mb-8">
              <span className="text-6xl mb-4 block">📧</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Our Free 7-Day Dog Training Starter Plan
              </h2>
              <p className="text-muted-foreground">
                Delivered to your inbox. Simple steps, real results.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-full border-2 border-border focus:border-primary h-12"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-full border-2 border-border focus:border-primary h-12"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full h-12">
                📘 Send Me The Free Guide
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;