import { useScroll } from '../../hooks/useScrollbar';
import userIcon from '../../../../assets/icon/nav/user-circle-regular-240.png';
import cartIcon from '../../../../assets/icon/nav/shop.webp';
import Style from './navbar.module.css';
import Logo from './logo/logo';
import Menu from './menu/menu';

export default function Header() {
  const { scrollY } = useScroll();
  return (
    <header className={scrollY >= 100 ? Style.header_scroll : Style.header}>
      <div className={Style.gradient}/>
      <Logo />
      <Menu/>
      <div className={Style.icons}>
        <img className={Style.cart_icon} src={cartIcon} alt="cart icon"/>
        <img className={Style.user_icon} src={userIcon}/>
      </div>
    </header>
  );
}