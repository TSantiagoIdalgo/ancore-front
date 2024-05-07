import { ProductHome } from '../../service/query/get-all-products';
import Style from './card.module.css';
import * as libs from '../../lib/libs';

function CardComponent ({ name, price, discount, mainImage, trailer }: ProductHome) {
  const [onMouseEnter, setOnMouseEnter] = libs.useState(false);

  const mouseEnter = () => {
    setOnMouseEnter(!onMouseEnter);
  };

  function parsePrice(num: number) {
    const number = num.toString();
    let numberString = parseFloat(number).toFixed(2);
    if (num % 1 === 0) return numberString;
    while (numberString.endsWith('0')) {
      numberString = numberString.slice(0, -1);
    }
    return numberString;
  }

  return (
    <figure className={Style.card}>
      <a href="#" className={Style.card_url} onMouseEnter={mouseEnter} onMouseLeave={mouseEnter}>
        <img src={mainImage} alt={name} className={Style.card_img}/>
        <video preload='none' loop autoPlay muted playsInline className={Style.card_video}>
          <source src={trailer} type='video/webm'/>
        </video>
        <span className={Style.discount} hidden={onMouseEnter}>-{discount}%</span>
      </a>
      <div className={Style.card_title}>
        <h2>{name}</h2>
        <span>${parsePrice(price)}</span>
      </div>
    </figure>
  );
}

export default CardComponent;