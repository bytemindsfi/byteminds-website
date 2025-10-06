import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import content from "@/data/content.json";

const cryptoCards = [
  {
    name: "Ethereum",
    symbol: "ETC",
    icon: "⟠",
    change: -5.21,
    marketCap: "$332,981,652,182",
    price: "- $3,050.19"
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "₿",
    change: 31.83,
    marketCap: "$882,128,981,371",
    price: "- $33,691.87",
    featured: true
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    icon: "Ł",
    change: 10.32,
    marketCap: "$761,291,637",
    price: "- $891.34"
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

          {/* Crypto Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 max-w-5xl mx-auto">
            {cryptoCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  card.featured
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl ${
                      card.featured ? 'bg-white/20' : 'bg-muted'
                    }`}>
                      {card.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{card.name}</div>
                      <div className={`text-sm ${card.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {card.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {card.change > 0 ? (
                      <ArrowUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={card.change > 0 ? 'text-green-500' : 'text-red-500'}>
                      {Math.abs(card.change)}%
                    </span>
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <div>
                    <div className={`text-2xl font-bold ${card.featured ? '' : 'text-foreground'}`}>
                      {card.marketCap}
                    </div>
                    <div className={`text-sm ${card.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      Market Cap
                    </div>
                  </div>
                  <div>
                    <div className={`text-lg ${card.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {card.price}
                    </div>
                    <div className={`text-sm ${card.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      Price Now
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
