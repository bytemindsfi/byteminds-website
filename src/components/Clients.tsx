import content from "@/data/content.json";

export const Clients = () => {
  return (
    <section className="py-20 relative">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-[10%] w-24 h-24 rounded-[30%] rotate-45 bg-shape-yellow/20 blur-2xl" />
      
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {content.clients.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.clients.segments.map((segment, index) => (
            <div
              key={index}
              className="text-center p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {segment.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
