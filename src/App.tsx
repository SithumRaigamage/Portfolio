import {
  Navbar,
  Hero,
  About,
  Services,
  Projects,
  TechStack,
  Contact,
  Footer,
} from '@/components/sections';
import { ThemeProvider } from '@/components/theme-provider';
import { ScrollToTop } from '@/components/scroll-to-top';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <TechStack />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
