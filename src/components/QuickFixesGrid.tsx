import { Volume2, Home, ShieldAlert } from "lucide-react";

const QuickFixesGrid = () => {
  const fixes = [
    {
      icon: Volume2,
      title: "Barking",
      description: "Quiet your dog without yelling",
      color: "text-primary"
    },
    {
      icon: Home,
      title: "Potty Training",
      description: "Easy steps to potty train your pup",
      color: "text-accent"
    },
    {
      icon: ShieldAlert,
      title: "Biting",
      description: "Teach your puppy not to nip",
      color: "text-primary-dark"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fix These Common Dog Problems Fast
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {fixes.map((fix, index) => (
            <div key={index} className="card-soft text-center hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
                  <fix.icon className={`w-8 h-8 ${fix.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {fix.title}
              </h3>
              <p className="text-muted-foreground">
                {fix.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFixesGrid;