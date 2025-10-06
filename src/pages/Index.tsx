import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Clients } from "@/components/Clients";
import { CEO } from "@/components/CEO";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Clients />
        <CEO />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
