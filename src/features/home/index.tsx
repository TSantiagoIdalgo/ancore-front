import * as HomeComponents from './components/index';

export default function Home () {
  return (
    <main style={{backgroundColor: '#272727'}}>
      <HomeComponents.ComponentCarrousel/>
      <HomeComponents.RenderCards tittle='Tendencias' filter={{page: 1, size: 9}}/>
      <HomeComponents.TrustPanel/>
      <HomeComponents.RenderCards tittle='Reservas' filter={{page: 1, size: 6}}/>
      <HomeComponents.Partners/>
      <HomeComponents.Feedback/>
      <HomeComponents.RenderCards tittle='Mas vendidos' filter={{page: 1, size: 9}}/>
      <div style={{height: '80px', width: '100%'}}/>
      <HomeComponents.ComponentCarrousel/>
    </main>
  );
}