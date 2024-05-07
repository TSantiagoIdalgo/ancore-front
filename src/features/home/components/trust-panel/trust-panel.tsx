import Style from './trust-panel.module.css';
import fastIcon from '../../../../assets/icon/services/CloudDownload.png';
import safeShield from '../../../../assets/icon/services/safeShield.png';
import bubbles from '../../../../assets/icon/services/bubbles.png';
import trustPilot from '../../../../assets/icon/services/trustpilot.png';
import { CSSProperties } from 'react';

export default function TrustPanel() {
  return (
    <section className={Style.container}>
      <div className={Style.content}>
        <Items icon={fastIcon} mainText='Súper rápido' subText='Descarga digital instantánea'/>
        <div className={Style.spacer}></div>
        <Items icon={safeShield} mainText='Fiable y seguro' subText='Mas de 10,000 juegos'/>
        <div className={Style.spacer}></div>
        <Items icon={bubbles} mainText='Atencion al client' subText='Agente disponible 24/7'/>
        <div className={Style.spacer}></div>
        <Items icon={trustPilot} style={{width: '220px', height: '100%'}}/>
      </div>
    </section>
  );
}

interface ItemsProps {
  icon: string;
  mainText?: string;
  subText?: string;
  style?: CSSProperties
}

const Items = ({ icon, mainText, subText, style }: ItemsProps) => {
  return (
    <article className={Style.content_fast}>
      <img src={icon} alt='fasticon' style={style}/>
      <div className={Style.text}>
        <span className={Style.mainText}>{mainText}</span>
        <span className={Style.subText}>{subText}</span>
      </div>
    </article>
  );
};