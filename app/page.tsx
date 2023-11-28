import HeroSection from '@/components/hero';
import SkillSection from '@/components/skills';

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <HeroSection />
      <SkillSection />
    </main>
  );
}
