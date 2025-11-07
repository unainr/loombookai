import { Lightbulb, Wand2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Share Your Idea",
    description: "Tell our AI about your book idea, target audience, and preferred style. The more details, the better the results.",
  },
  {
    icon: Wand2,
    number: "02",
    title: "AI Creates Magic",
    description: "Our AI generates content, suggests structures, designs layouts, and creates a professional e-book tailored to your vision.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publish & Share",
    description: "Review, customize, and publish your e-book to all major platforms with one click. Start earning from your ideas today.",
  },
];

const HowItWorksSection = () => {
  return (
   <section id="how-it-works" className="py-10 bg-background">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-10 px-2">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-2">
        From Idea to Published {" "}
        <span className="text-[#ffbc5f] font-semibold">
           E-Book  in 3 Simple Steps
        </span>{" "}
       
      </h2>

      <p className="text-base md:text-lg text-muted-foreground mt-1">
        Our streamlined process makes e-book creation effortless
      </p>
    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-3 gap-8 relative">
      
      {/* connecting line on desktop */}
      <div className="hidden md:block absolute top-24 left-1/4 h-0.5 bg-linear-to-r from-[#ffbc5f] via-[#ffbf6a] to-[#ffbc5f] opacity-30" />

      {steps.map((step, index) => (
        <div 
          key={index}
          className="relative space-y-6 animate-fade-in-up"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="flex flex-col items-center text-center space-y-4">

            {/* Icon container */}
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg bg-[#ffbc5f] transition-transform duration-300 hover:scale-105">
                <step.icon className="w-10 h-10 text-black" />
              </div>

              {/* Step number bubble */}
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#ffbc5f] text-black font-bold flex items-center justify-center text-sm shadow-md">
                {step.number}
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold">
              {step.title}
            </h3>

            <p className="text-muted-foreground max-w-sm text-sm md:text-base">
              {step.description}
            </p>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default HowItWorksSection;
