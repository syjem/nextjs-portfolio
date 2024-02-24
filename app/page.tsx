import HeroSection from '@/components/hero';
import SkillSection from '@/components/skills';
import ContactSection from '@/components/contact';
import Projects from '@/components/projects';
import { SparklesCore } from '@/components/ui/sparkles';

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <HeroSection />
      <SkillSection />
      <Projects />
      <ContactSection />
    </main>
  );
}
