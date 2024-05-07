import Style from './partners.module.css';

export default function Partners () {
  return (
    <section className={Style.container}>
      <figure className={Style.content}>
        <picture>
          <img src="https://www.instant-gaming.com/themes/igv2/modules/streamerBanner/images/partners-avatar2-es.png" loading='lazy' alt="avatar" />
        </picture>
      </figure>
      <div className={Style.text}>
        <img src="https://www.instant-gaming.com/themes/igv2/modules/streamerBanner/images/stars-rating2.svg" alt="stars" />
        <div className={Style.commnent}>
          <b className={Style.comment_b}>Intant Gaming es una excelente forma de obtener juegos más baratos, al mismo tiempo que apoyas a los desarrolladores. Fue rápido, pude pagar con PayPal y obtuve el código inmediatamente después del pago.</b>
          <br />
          <br />
          <b className={Style.comment_b}>Cabravoladora, Streamer y partner de Instant Gaming.</b>
        </div>
        <a href="#" title='Comentarios de usuarios' className={Style.button}>1,508,320 comentarios de usuarios</a>
      </div>
    </section>
  );
}