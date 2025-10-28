import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo/>
            <p className="text-muted-foreground">
              Creating meaningful AI companions for everyone.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quicks Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/create-companion" className="hover:text-primary transition-colors">Companion</Link></li>
              <li><Link href="/learning-ai" className="hover:text-primary transition-colors">Learning</Link></li>

              <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
                         <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>

              <li><Link href="/create-companion" className="hover:text-primary transition-colors">Companion</Link></li>
              <li><Link href="/journey" className="hover:text-primary transition-colors">Journey</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Wisera. All rights reserved.</p>
            <p className="text-sm">Develop by Unain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;