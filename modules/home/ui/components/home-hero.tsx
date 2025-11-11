import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
<div className="relative w-full min-h-screen flex items-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-no-repeat "
    style={{ backgroundImage: "url('/slider-15.jpg')" }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Content */}
  <div className="relative z-10 w-full">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center py-28 md:py-32">
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
        Create Professional<br className="hidden md:block" /> E-Books with AI
      </h3>

      <p className="text-lg md:text-2xl text-white mb-8 md:mb-10 max-w-2xl">
        Turn your ideas into beautifully formatted e-books in minutes with advanced AI technology.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-14">
        <Button   >
          Get Started Free
        </Button>
       
      </div>

     
    </div>
  </div>
</div>

  );
}