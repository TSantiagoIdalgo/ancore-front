import Style from './trending.module.css';
import { useScroll } from '../../../../hooks/useScrollbar';

export default function Trending () {
  const { scrollY } = useScroll();
  return (
    <div className={scrollY >= 100 ? Style.trendings_scroll : Style.trendings}>
      <a href="#">Tendencias</a>
      <a href="#">Whitelist</a>
      <a href="#">Soport 24/7</a>
    </div>
  );
}