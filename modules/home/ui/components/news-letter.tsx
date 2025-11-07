'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
   <section className="py-20 bg-linear-to-br from-[#ffbc5f] via-[#ffb04a] to-[#ff9c22] relative overflow-hidden">
  {/* subtle mesh/grid overlay */}
  <div className="absolute inset-0 opacity-20" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-2xl mx-auto text-center ">

      <Mail className="h-16 w-16 mx-auto mb-6 animate-fade-in " />

      <h2 className="text-3xl md:text-5xl font-bold leading-[1.2] mb-3">
        Join Our Book Club
      </h2>

      <p className="text-lg md:text-xl mb-8 ">
        Get exclusive deals, new releases, and personalized recommendations delivered to your inbox
      </p>

      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="dark:bg-white bg-white text-black border border-black/10 h-12 text-base rounded-xl"
        />

        <Button 
          type="submit"
          size="lg"
          className="bg-black text-white hover:bg-black/90 h-12 px-8 rounded-xl font-semibold"
        >
          Subscribe
        </Button>
      </form>
    </div>
  </div>
</section>

  );
};

export default Newsletter;
