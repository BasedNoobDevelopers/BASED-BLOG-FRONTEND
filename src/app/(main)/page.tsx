
import Carousel from '@/components/layout/carousel';
import Newsletter from '@/components/layout/newsletter';
import HomeGrid from '@/components/layout/grid';

export default function HomePage() {
  return (
    <div>
      <main>
        <Carousel/>
        <HomeGrid/>
        <Newsletter/>
      </main>
    </div>
  );
}
