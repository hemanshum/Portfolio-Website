import Hero from '@/components/hero';
import About from '@/components/about';
import Service from '@/components/services';
import Work from '@/components/work';
import Reviews from '@/components/reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      <Reviews />
    </main>
  );
}
