import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { techCategories, techCategoryTabs } from '@/data';
import { MotionSection } from '@/components/motion-section';

export function TechStack() {
  return (
    <section id="techstack" className="py-20">
      <div className="container mx-auto px-4">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tech Stack
        </h2>

        <Tabs defaultValue="web" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-5 w-full mb-8">
            {techCategoryTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-xs sm:text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {techCategoryTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {techCategories[tab.value as keyof typeof techCategories].length ===
              0 ? (
                <p className="text-center text-muted-foreground py-8">
                  No {tab.label} technologies added yet.
                </p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {techCategories[tab.value as keyof typeof techCategories].map(
                    (tech) => (
                      <Card
                        key={tech.name}
                        className="group bg-card/50 backdrop-blur hover:bg-card hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
                      >
                        <CardContent className="pt-6 text-center">
                          <img
                            src={tech.img}
                            alt={tech.name}
                            className="w-12 h-12 mx-auto mb-3 object-contain group-hover:scale-110 transition-transform"
                          />
                          <h4 className="font-medium text-sm mb-1">
                            {tech.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {tech.desc}
                          </p>
                        </CardContent>
                      </Card>
                    )
                  )}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        </MotionSection>
      </div>
    </section>
  );
}
