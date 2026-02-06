import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data';
import { MotionSection } from '@/components/motion-section';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contactme');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-full -z-10 blur-3xl opacity-50 dark:opacity-20" />
      
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full -z-10 blur-2xl opacity-50 dark:opacity-20" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <MotionSection className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                {personalInfo.name}
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8 h-8">
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  1000,
                  'Full Stack Developer',
                  1000,
                  'Tech Enthusiast',
                  1000,
                  'Problem Solver',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="space-y-4 mb-8">
              {personalInfo.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToContact} className="px-8 group">
                Connect With Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </MotionSection>

          {/* Profile Image */}
          <MotionSection delay={0.2} className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-4 border-2 border-primary/20 rounded-full" />
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
       
