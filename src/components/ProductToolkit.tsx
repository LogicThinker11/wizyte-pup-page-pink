import { Button } from "@/components/ui/button";
import trainingProductsImage from "@/assets/training-products.jpg";

const ProductToolkit = () => {
  const products = [
    {
      name: "Training Clicker",
      description: "Professional clicker for precise timing",
      price: "$12.99",
      emoji: "🎯"
    },
    {
      name: "Treat Pouch",
      description: "Hands-free training with easy access",
      price: "$24.99",
      emoji: "👜"
    },
    {
      name: "Anti-Bark Collar",
      description: "Gentle, humane bark control",
      price: "$49.99",
      emoji: "🔇"
    },
    {
      name: "Training Pads",
      description: "Super absorbent for house training",
      price: "$19.99",
      emoji: "📋"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recommended Tools to Train Smarter, Not Harder
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Featured Image */}
          <div className="mb-12 text-center">
            <img 
              src={trainingProductsImage} 
              alt="Training products with happy puppy" 
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-lg"
            />
          </div>
          
          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product, index) => (
              <div key={index} className="card-soft text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{product.emoji}</div>
                <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                <div className="text-primary font-bold text-lg">{product.price}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="btn-hero text-lg px-8 py-4">
              🔗 View All in Our Training Toolkit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductToolkit;