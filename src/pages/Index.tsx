import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Clients } from '@/components/Clients';
import { LOCATION } from '@/components/LOCATION.tsx';
import { CTA } from '@/components/CTA';

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
                <Hero />
                <Services />
                <Clients />
                <LOCATION />
                <CTA />
            </main>
        </div>
    );
};

export default Index;
