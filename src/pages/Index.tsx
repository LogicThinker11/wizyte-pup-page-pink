import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickFixesGrid from "@/components/QuickFixesGrid";
import FeaturedCourse from "@/components/FeaturedCourse";
import LeadMagnet from "@/components/LeadMagnet";
import ProductToolkit from "@/components/ProductToolkit";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickFixesGrid />
        <FeaturedCourse />
        <LeadMagnet />
        <ProductToolkit />
        <Testimonials />
        <BlogPreview />
        <FinalCTA />
      </main>
    </div>
  );
};

export default Index;
