import HeroSection from '@/components/hero';
import SkillSection from '@/components/skills';
import ContactSection from '@/components/contact';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SkillSection />
      <Projects />
      <ContactSection />
    </main>
  );
}
