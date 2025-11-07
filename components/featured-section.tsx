import { Brain, Palette, Zap, BookOpen, FileText, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Writing",
    description: "Our advanced AI helps you write compelling content, suggest improvements, and maintain your unique voice throughout your book.",
  },
  {
    icon: Palette,
    title: "Professional Design",
    description: "Choose from hundreds of beautiful templates or let AI design a custom layout that perfectly matches your book's theme.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create a complete e-book in minutes, not months. Our AI handles the heavy lifting while you focus on your ideas.",
  },
  {
    icon: BookOpen,
    title: "Smart Formatting",
    description: "Automatic formatting ensures your e-book looks professional on every device and platform.",
  },
  {
    icon: FileText,
    title: "Multiple Formats",
    description: "Export your book in PDF, EPUB, MOBI, and more. One-click publishing to major platforms.",
  },
  {
    icon: Download,
    title: "Instant Publishing",
    description: "Publish directly to Amazon Kindle, Apple Books, and other platforms with a single click.",
  },
];

const FeaturesSection = () => {
  return (
   <section id="features" className="py-20 bg-gradient-subtle">
  <div className="container mx-auto px-4">
    
    <div className="text-center max-w-3xl mx-auto mb-10 px-2">
      <h2 className="text-3xl md:text-6xl font-bold leading-[1.2] mb-2">
        Everything You Need to{" "}
        <span className="text-[#ffbc5f] font-semibold">
          Create Amazing E-Books
        </span>
      </h2>

      <p className="text-base md:text-lg text-muted-foreground mt-1">
        Powerful features that make e-book creation effortless and enjoyable
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#ffbc5f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-black" />
            </div>

            <h3 className="text-lg md:text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

  );
};

export default FeaturesSection;
