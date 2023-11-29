import HeroSection from '@/components/hero';
import SkillSection from '@/components/skills';
import ContactSection from '@/components/contact';

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <HeroSection />
      <SkillSection />
      <ContactSection />
    </main>
  );
}
