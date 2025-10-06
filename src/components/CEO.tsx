import ceoPhoto from '@/assets/ceo-photo.jpg';
import content from '@/data/content.json';

export const CEO = () => {
    return (
        <section className="py-20 relative">
            {/* Decorative shape */}
            <div className="absolute top-0 left-[15%] w-28 h-28 rounded-full bg-shape-blue/20 blur-2xl" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <img
                                    src={ceoPhoto}
                                    alt={content.ceo.name}
                                    className="w-64 h-64 object-cover rounded-3xl"
                                />
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl font-bold mb-2">{content.ceo.name}</h3>
                            <p className="text-muted-foreground mb-6">{content.ceo.title}</p>
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                                "{content.ceo.quote}"
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
