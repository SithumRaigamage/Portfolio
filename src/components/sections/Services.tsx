import { Card, CardContent } from '@/components/ui/card';
import { Code, Laptop, Database } from 'lucide-react';
import { services } from '@/data';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-12 h-12" />,
  Laptop: <Laptop className="w-12 h-12" />,
  Database: <Database className="w-12 h-12" />,
};

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-muted-foreground">
            Offering full-stack development services to create seamless,
            responsive, and high-performance web applications. From front-end to
            back-end, I deliver modern solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group bg-card/50 backdrop-blur hover:bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
