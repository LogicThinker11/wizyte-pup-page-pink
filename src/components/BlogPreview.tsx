import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blogThumbnails from "@/assets/blog-thumbnails.jpg";

const BlogPreview = () => {
  const articles = [
    {
      title: "5 Essential Commands Every Puppy Should Know",
      preview: "Start your puppy's training journey with these fundamental commands that will set the foundation for lifelong good behavior.",
      readTime: "3 min read"
    },
    {
      title: "How to Stop Leash Pulling Once and For All",
      preview: "Transform your daily walks from a struggle into an enjoyable experience with these proven techniques.",
      readTime: "5 min read"
    },
    {
      title: "The Science Behind Positive Reinforcement",
      preview: "Discover why reward-based training is more effective than punishment and how to implement it correctly.",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Training Tips from Our Blog
          </h2>
        </div>
        
        {/* Featured Blog Image */}
        <div className="mb-12 text-center">
          <img 
            src={blogThumbnails} 
            alt="Dog training blog articles" 
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-soft"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <div key={index} className="card-soft group hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <span className="text-xs text-primary font-medium bg-primary-light px-3 py-1 rounded-full">
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {article.preview}
              </p>
              
              <Button variant="ghost" className="text-primary hover:text-primary-dark p-0 h-auto group">
                Read More 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;