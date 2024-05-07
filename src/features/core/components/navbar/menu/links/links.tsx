import { useScroll } from '../../../../hooks/useScrollbar';
import Style from './links.module.css'; 
import Search from '../search/search';
import rowToBottom from '../../../../../../assets/icon/row-to-bottom.png';
import DesktopIcon from '../../../../../../assets/icon/menu/pc.webp';
import PSICon from '../../../../.:/../../../assets/icon/menu/ps.webp';
import XboxIcon from '../../../../.:/../../../assets/icon/menu/xbox.webp';
import NintendoIcon from '../../../../../../assets/icon/menu/nintendo.webp';


export default function Links() {
  const { scrollY } = useScroll();
  return (
    <div className={scrollY >= 100 ? Style.product_menu_scroll : Style.product_menu}>
      <Link to='#' name='PC' image={DesktopIcon}/>
      <Link to='#' name='Playstation' image={PSICon}/>
      <Link to='#' name='Xbox' image={XboxIcon}/>
      <Link to='#' name='Nintendo' image={NintendoIcon}/>
      <Search/>
    </div>
  );
}

interface LinkProps {
  to: string;
  name: string;
  image: string;
}

function Link({ to, name, image }: LinkProps) {
  return (
    <a href={to} className={Style.icons}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <img src={rowToBottom} alt='row to bottom' />
    </a>
  );
}