import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
<div className="relative w-full min-h-screen flex items-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: "url('/heroimage.jpg')" }}
  ></div>

  {/* Overlay - darker for light theme, lighter for dark theme */}
  <div className="absolute inset-0 bg-black/50 dark:bg-black/30"></div>

  {/* Content */}
  <div className="relative z-10 w-full">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-end justify-center py-28 md:py-32">
      <div className="text-right max-w-3xl">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-6 leading-tight drop-shadow-lg">
          Create Professional<br className="hidden md:block" /> E-Books with AI
        </h3>

        <p className="text-lg md:text-2xl text-white dark:text-gray-100 mb-8 md:mb-10 drop-shadow-md">
          Turn your ideas into beautifully formatted e-books in minutes with advanced AI technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-14 justify-end">
          <Button className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 px-8 py-6 text-lg">
            Get Started Free
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}