import { Lock, Radio, Send, Headphones, Cloud, Bot, Navigation, Headset } from "lucide-react";
import content from "@/data/content.json";

const iconMap = {
  lock: Lock,
  radio: Radio,
  send: Send,
  headphones: Headphones,
  cloud: Cloud,
  bot: Bot,
  navigation: Navigation,
  headset: Headset
};

const iconColors = [
  "text-[hsl(var(--shape-yellow))]",
  "text-[hsl(var(--shape-blue))]",
  "text-[hsl(var(--shape-orange))]",
  "text-[hsl(var(--shape-purple))]",
  "text-[hsl(var(--shape-orange))]",
  "text-[hsl(var(--shape-purple))]",
  "text-[hsl(var(--shape-orange))]",
  "text-[hsl(var(--shape-purple))]"
];

export const Services = () => {
  return (
    <section className="py-20 relative">
      {/* Decorative shapes */}
      <div className="absolute top-40 right-[10%] w-32 h-32 rounded-full bg-shape-purple/20 blur-3xl" />
      <div className="absolute bottom-40 left-[5%] w-40 h-40 rounded-full bg-shape-orange/15 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-6 ${iconColors[index]}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
