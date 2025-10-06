import { Button } from '@/components/ui/button';
import { Twitter, Instagram } from 'lucide-react';
import content from '@/data/content.json';
import { Link } from 'react-router-dom';

export const CTA = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">{content.cta.title}</h2>
                    <p className="text-lg text-muted-foreground">{content.cta.subtitle}</p>

                    <div className="pt-4">
                        <Link to="https://calendly.com/bytemindsfi/30min" target="_blank">
                            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                                {content.cta.buttonText}
                            </Button>
                        </Link>
                    </div>

                    <div className="flex gap-6 justify-center pt-8">
                        {content.footer.social.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {social.platform === 'twitter' && <Twitter className="w-6 h-6" />}
                                {social.platform === 'instagram' && <Instagram className="w-6 h-6" />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
