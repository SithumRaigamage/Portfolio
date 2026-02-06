import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Briefcase,
  MapPin,
  Mail,
  Calendar,
  GraduationCap,
  FolderGit2,
  Code,
  Coffee,
  Clock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import {
  personalInfo,
  education,
  experience,
  stats,
  aboutTabs,
} from '@/data';
import { certificates } from '@/data/certificates';
import { MotionSection } from '@/components/motion-section';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from '@/components/theme-provider';

const CERTS_PER_PAGE = 6;

const iconMap: Record<string, React.ReactNode> = {
  FolderGit2: <FolderGit2 className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Coffee: <Coffee className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
};

export function About() {
  const [certPage, setCertPage] = useState(1);
  const { theme } = useTheme();
  const totalCertPages = Math.ceil(certificates.length / CERTS_PER_PAGE);

  const paginatedCerts = certificates.slice(
    (certPage - 1) * CERTS_PER_PAGE,
    certPage * CERTS_PER_PAGE
  );

  return (
    <section id="aboutme" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <Tabs defaultValue="personal" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-5 w-full mb-8">
            {aboutTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="personal">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <User className="w-8 h-8 mb-3 text-primary" />
                  <p className="font-medium">{personalInfo.name}</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Briefcase className="w-8 h-8 mb-3 text-primary" />
                  <p className="font-medium">{personalInfo.jobTitle}</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <MapPin className="w-8 h-8 mb-3 text-primary" />
                  <p className="font-medium">{personalInfo.location}</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <Mail className="w-8 h-8 mb-3 text-primary" />
                  <p className="font-medium">{personalInfo.email}</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <SiGithub className="w-8 h-8 mb-3 text-primary" />
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    SithumRaigamage
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <SiLinkedin className="w-8 h-8 mb-3 text-primary" />
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    Sithum Raigamage
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <MotionSection className="relative border-l border-primary/30 ml-3 md:ml-6 space-y-8 pl-8 md:pl-12 py-4">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                   <span className="absolute -left-[41px] md:-left-[57px] top-6 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                   <Card className="bg-card/50 backdrop-blur">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{edu.period}</span>
                            <Badge variant="secondary">{edu.status}</Badge>
                          </div>
                          <h4 className="text-lg font-semibold flex items-center gap-2">
                            <GraduationCap className="w-5 h-5" />
                            {edu.institution}
                          </h4>
                          {edu.partner && (
                            <p className="text-sm text-muted-foreground mt-1">
                              In partnership with <strong>{edu.partner}</strong>
                            </p>
                          )}
                          <p className="mt-2">{edu.degree}</p>
                        </div>
                        <div className="flex gap-3">
                          {edu.logos.map((logo) => (
                            <img
                              key={logo}
                              src={logo}
                              alt="Institution logo"
                              className="w-16 h-16 object-contain rounded"
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </MotionSection>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <MotionSection className="relative border-l border-primary/30 ml-3 md:ml-6 space-y-8 pl-8 md:pl-12 py-4">
              {experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <span className="absolute -left-[41px] md:-left-[57px] top-6 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                  <Card className="bg-card/50 backdrop-blur">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold flex items-center gap-2">
                            <Briefcase className="w-5 h-5" />
                            {exp.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {exp.company} | {exp.period}
                          </p>
                          {exp.responsibilities && (
                            <ul className="mt-3 space-y-1">
                              {exp.responsibilities.map((resp) => (
                                <li
                                  key={resp}
                                  className="text-sm text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="text-primary">✓</span>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <img
                          src={exp.companyLogo}
                          alt={exp.company}
                          className="w-20 h-20 object-contain rounded"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </MotionSection>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certificates">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedCerts.map((cert) => (
                <Card
                  key={cert.id}
                  className="bg-card/50 backdrop-blur hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6 text-center">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-12 h-12 mx-auto mb-4 object-contain"
                    />
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <img
                        src={cert.platformLogo}
                        alt={cert.platformName}
                        className="w-5 h-5 object-contain"
                      />
                      <h4 className="font-semibold">{cert.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {totalCertPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCertPage((p) => Math.max(1, p - 1))}
                  disabled={certPage === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {certPage} of {totalCertPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCertPage((p) => Math.min(totalCertPages, p + 1))
                  }
                  disabled={certPage === totalCertPages}
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </TabsContent>
          {/* Stats Tab */}
          <TabsContent value="stats">
            <MotionSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                  <Card
                    key={stat.id}
                    className="bg-card/50 backdrop-blur text-center"
                  >
                    <CardContent className="pt-6">
                      <div className="text-primary mb-3 flex justify-center">
                        {iconMap[stat.icon]}
                      </div>
                      <h4 className="text-3xl font-bold mb-1">{stat.value}</h4>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center p-4 bg-card/50 rounded-xl border border-border/50 backdrop-blur overflow-hidden">
                <div className="w-full max-w-4xl overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-4 text-center">GitHub Contributions</h3>
                    <div className="flex justify-center min-w-[600px]">
                      <GitHubCalendar 
                        username="SithumRaigamage" 
                        colorScheme={theme === 'dark' ? 'dark' : 'light'}
                        blockSize={12}
                        blockMargin={4}
                        fontSize={14}
                      />
                    </div>
                </div>
              </div>
            </MotionSection>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
