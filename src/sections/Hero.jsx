import { useEffect } from 'react';

import styles from './Hero.module.css';

import minimalistWallpaper from '../assets/images/MinimalistF1.jpg';
import chevromCar from '../assets/icons/chevromCar.png';
import imageOverlay from '../assets/images/imageOverlay.jpg';

const Hero = () => {
  useEffect(() => {
    const chevron = document.querySelector(`.${styles.heroChevrons}`);
    chevron.addEventListener('mouseenter', () => {
      chevron.classList.add(styles.moveDown);
    });
    chevron.addEventListener('mouseleave', () => {
      chevron.classList.remove(styles.moveDown);
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroImagesContainer}>
        <img src={minimalistWallpaper} alt="F1 Car Wallpaper" className={styles.wallpaper_img} />
        <img src={imageOverlay} alt="F1 Overlay" className={styles.overlay_img} />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>A Velocidade e a Emoção da Fórmula 1.</h1>
        <h3 className={styles.heroSubtitle}>Explore a história, os circuitos e as inovações tecnológicas da F1.</h3>

        <div className={styles.heroChevrons}>
          <a href="#sobre"><img src={chevromCar} alt="Seta personalizada de carro" className={styles.chevromCar} /></a>
        </div>


      </div>
    </section>
  );
};

export default Hero;