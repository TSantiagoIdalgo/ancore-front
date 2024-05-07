import Style from './feedback.module.css';
import * as libs from '../../lib/libs';

const dataValue = {
  userImg: 'https://gaming-cdn.com/images/avatars/6271942-1597951193.jpg',
  gameName: 'Gray Zone Warfare',
  game: 'https://www.instant-gaming.com/es/15557-comprar-gray-zone-warfare-pc-juego-steam/',
  description: 'Vaya tela, lo compro a 30€ y a los 5 minutos, todavía estoy descargándolo y ahora veo que lo habéis bajado a 27.99€ en sólo 5 minutos.... Un juego que lo acabáis de poner a la venta...',
  time: 'hace 9 minutos'
};

interface Data {
    userImg: string;
    gameName: string;
    game: string;
    description: string;
    time: string;
}

export default function Feedback () {
  const [data, setData] = libs.useState<Data[]>([]);
  libs.useEffect(() => {
    const dataIterable: Data[] = [];
    let i = 0;
    while(i < 5) {
      i++;
      dataIterable.push(dataValue);
    }
    setData(dataIterable);
  }, []);
  return (
    <aside className={Style.feedback_container}>
      <div className={Style.feedbacks}>
        {data.map((user, i) => (
          <figure key={i} className={Style.item}>
            <div className={Style.user}>
              <img src={user.userImg} className={Style.user_img} alt='user' />
              <div className={Style.user_data}>
                <img src="https://www.instant-gaming.com/themes/igv2/modules/streamerBanner/images/stars-rating2.svg" alt="stars" />
                <span>{user.gameName}</span>
              </div>
            </div>
            <div className={Style.user_description }>
              <p >{user.description}</p>
            </div>
            <span className={Style.time}>{user.time}</span>
          </figure>
        ))}
      </div>
    </aside>
  );
}