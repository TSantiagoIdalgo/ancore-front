import Style from './menu.module.css';
import Trending from './trending/trending';
import Links from './links/links';

export default function Menu() {
  return (
    <div className={Style.menu}>
      <Trending />
      <Links/>
    </div>
  );
}