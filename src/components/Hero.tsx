import { Button } from "@/components/ui/button";
import content from "@/data/content.json";

const clientCards = [
  {
    name: "Fairytale Magic Oy",
    type: "Sports & Entertainment Platform",
    description: "Full-stack development and ongoing maintenance for a sports entertainment mobile application and admin dashboard.",
    technologies: "React Native, NestJS, MongoDB",
    results: "Scalable, secure platform handling real-time sports data and user transactions",
    website: "https://www.fairytalemagic.fi/",
    featured: true
  },
  {
    name: "Droppx Technology Oy",
    type: "E-commerce & Delivery Platform",
    description: "End-to-end development of a comprehensive e-commerce and logistics marketplace connecting merchants with delivery services.",
    technologies: "Node.js, React, React Native, MongoDB, Shopify API",
    results: "Multi-sided marketplace handling thousands of monthly transactions for 100+ businesses",
    website: "https://thehub.io/startups/droppx"
  }
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-[15%] w-24 h-24 rounded-full bg-shape-purple/20 blur-2xl animate-pulse" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {content.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              {content.hero.cta.primary}
            </Button>
            <Button size="lg" variant="outline">
              {content.hero.cta.secondary}
            </Button>
          </div>

          {/* Client Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-12 max-w-6xl mx-auto">
            {clientCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 ${
                  card.featured
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border'
                }`}
              >
                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{card.name}</h3>
                    <p className={`text-sm md:text-base font-medium ${card.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {card.type}
                    </p>
                  </div>
                  
                  <p className={`text-sm md:text-base leading-relaxed ${card.featured ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                    {card.description}
                  </p>
                  
                  <div>
                    <p className={`text-xs md:text-sm font-semibold mb-1 ${card.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      Technologies
                    </p>
                    <p className={`text-sm ${card.featured ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                      {card.technologies}
                    </p>
                  </div>
                  
                  <div>
                    <p className={`text-xs md:text-sm font-semibold mb-1 ${card.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      Results
                    </p>
                    <p className={`text-sm ${card.featured ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                      {card.results}
                    </p>
                  </div>
                  
                  <a 
                    href={card.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-block text-sm md:text-base font-medium hover:underline ${
                      card.featured ? 'text-primary-foreground' : 'text-primary'
                    }`}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
