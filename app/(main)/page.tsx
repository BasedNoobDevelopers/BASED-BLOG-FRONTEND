import classes from './page.module.css'
import Carousel from '@/components/layout/carousel';
import Newsletter from '@/components/layout/newsletter';

export default function HomePage() {
  return (
    <div className={classes.body}>
      <main>
        <Carousel/>
        <Newsletter/>
      </main>
    </div>
  );
}
