import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, projectCategories } from '@/data';
import type { ProjectCategory } from '@/types';
import { MotionSection } from '@/components/motion-section';

const ITEMS_PER_PAGE = 6;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <MotionSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          My Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(cat.value as ProjectCategory)}
              className="transition-all"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        {paginatedProjects.length === 0 ? (
          <p className="text-center text-muted-foreground">No projects found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden bg-card/50 backdrop-blur hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button size="sm" asChild>
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-3 h-3"
                        />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Prev
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className="w-8 h-8 p-0"
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
        </MotionSection>
      </div>
    </section>
  );
}
