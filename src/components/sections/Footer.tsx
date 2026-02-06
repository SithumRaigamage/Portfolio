import { SiGithub, SiLinkedin } from 'react-icons/si';
import { socialLinks } from '@/data';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sithum Raigamage. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
              >
                {link.platform === 'linkedin' && <SiLinkedin className="w-5 h-5" />}
                {link.platform === 'github' && <SiGithub className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
