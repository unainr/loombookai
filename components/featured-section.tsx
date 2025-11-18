import { Brain, Palette, Zap, BookOpen, FileText, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

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
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-linear-to-b from-white via-amber-50/30 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 overflow-hidden transition-colors duration-300">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 dark:bg-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="h-px w-8 bg-linear-to-r from-transparent to-amber-500 dark:to-amber-400"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400">
              Features
            </span>
            <div className="h-px w-8 bg-linear-to-l from-transparent to-amber-500 dark:to-amber-400"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-4 sm:mb-6 px-4">
            <span className="text-gray-900 dark:text-white transition-colors duration-300">
              Everything You Need to
            </span>
            <br />
            <span className="bg-linear-to-r from-amber-500 via-amber-600 to-orange-500 dark:from-amber-400 dark:via-amber-500 dark:to-orange-400 bg-clip-text text-transparent animate-gradient">
              Create Amazing E-Books
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Powerful features that make e-book creation effortless and enjoyable for everyone
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-800/50 hover:border-amber-300/50 dark:hover:border-amber-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/5 animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-amber-50/0 via-amber-50/0 to-orange-50/0 dark:from-amber-950/0 dark:via-amber-950/0 dark:to-orange-950/0 group-hover:from-amber-50/50 group-hover:via-amber-50/30 group-hover:to-orange-50/50 dark:group-hover:from-amber-950/30 dark:group-hover:via-amber-950/20 dark:group-hover:to-orange-950/30 rounded-2xl transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative space-y-4">
                {/* Icon */}
                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-amber-500/30 dark:shadow-amber-500/20">
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                  </div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-amber-400 dark:bg-amber-500 opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500 blur-xl"></div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-amber-400/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:to-transparent dark:group-hover:from-amber-400/5 rounded-bl-full rounded-tr-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div  className="text-center mt-12 sm:mt-16 lg:mt-20">
          <Link href={'/create-book'}>
          <Button size={'lg'} className="group inline-flex items-center gap-3  bg-linear-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-amber-500/30 dark:shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/40 dark:hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
            Start Creating Today
           
          </Button>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>

 
    </section>

  );
};

export default FeaturesSection;
