import Style from './componentCarrousel.module.css';
import { useGetBanners } from '../../hooks/interval-Banner';

export default function ComponentCarrousel(): JSX.Element {
  const banner = useGetBanners();
  if (!banner) return <div/>;
  if (typeof banner === 'string') return <div/>;
  return (
    <section className={Style.componentCarrousel} style={{backgroundImage: `url(${banner.mainImage})`}}>
      <div className={Style.gradient}/>
      <div className={Style.clip_path}/>
      <article className={Style.product_data}>
        <h2>{banner.name}</h2>
        <div className={Style.price_data}>
          <span className={Style.discount}>-{banner.discount}%</span>
          <span className={Style.price}>${banner.price.toFixed(2)}</span>
        </div>
      </article>
    </section>
  );
}