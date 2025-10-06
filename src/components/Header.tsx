import { Button } from "@/components/ui/button";
import logo from "@/assets/byteminds-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Byteminds" className="h-8 w-8" />
          <span className="text-xl font-bold">yteminds</span>
        </div>
        <Button variant="outline" size="sm">
          Get In Touch
        </Button>
      </div>
    </header>
  );
};
